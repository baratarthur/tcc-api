import { getRepository, Repository } from "typeorm";

import { ReadableData } from "../../entities/ReadableData";
import { Street } from "../../entities/Street";
import { ISaveStreetDataDTO, IStreetRepository } from "../IStreetRepository";

class StreetRepository implements IStreetRepository {
  private repository: Repository<Street>;

  public constructor() {
    this.repository = getRepository(Street);
  }

  async getAll(): Promise<Street[]> {
    const streets = await this.repository.find({
      relations: ["readable_data"],
    });
    return streets;
  }

  async save({ name, lat, long, data }: ISaveStreetDataDTO): Promise<Street> {
    const media = data.reduce(
      (acumulador, valor) => acumulador + valor.z_value / data.length,
      0
    );
    const variancia = data.reduce(
      (acumulador, valor) =>
        acumulador + (media - valor.z_value) ** 2 / data.length,
      0
    );
    const desvioPadrao = Math.sqrt(variancia);

    const mappedData = data.map((data) => {
      const coordinatesWithData = new ReadableData();
      Object.assign(coordinatesWithData, data);
      return coordinatesWithData;
    });

    const street = new Street();
    street.name = name;
    street.quality = this.getStreetQuality(desvioPadrao);
    street.lat = lat;
    street.long = long;
    street.readable_data = mappedData;

    await this.repository.save(street);

    return street;
  }

  getStreetQuality(desvioPadrao: number): string {
    if (desvioPadrao < 0.3) {
      return "OTIMA";
    }
    if (desvioPadrao < 0.6) {
      return "PRECISA DE REPAROS";
    }
    return "VIA EM CONDICOES CRITICAS";
  }
}

export { StreetRepository };
