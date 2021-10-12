import { Street } from "modules/street/entities/Street";
import { inject, injectable } from "tsyringe";

import {
  IStreetRepository,
  IStreetData,
} from "../../repositories/IStreetRepository";

interface IRequest {
  street_name: string;
  lat: number;
  long: number;
  data: IStreetData[];
}

enum STREET_QUALITY {
  OTIMA = "OTIMA",
  PRECISA_REPAROS = "PRECISA_REPAROS",
  ESTADO_CRITICO = "ESTADO_CRITICO",
}

@injectable()
class SaveStreetUseCase {
  constructor(
    @inject("StreetRepository")
    private streetRepository: IStreetRepository
  ) {}

  async execute({ street_name, lat, long, data }: IRequest): Promise<Street> {
    const media = data.reduce(
      (acumulador, valor) => acumulador + valor.z_value / data.length,
      0
    );
    const variancia = data.reduce(
      (acumulador, valor) =>
        acumulador + (media - valor.z_value) ** 2 / data.length,
      0
    );

    const street = await this.streetRepository.save({
      name: street_name,
      quality: this.getStreetQuality(variancia),
      lat,
      long,
      data,
    });
    return street;
  }

  getStreetQuality(variancia: number): string {
    if (variancia < 0.3) {
      return STREET_QUALITY.OTIMA;
    }
    if (variancia < 0.6) {
      return STREET_QUALITY.PRECISA_REPAROS;
    }
    return STREET_QUALITY.ESTADO_CRITICO;
  }
}

export { SaveStreetUseCase };
