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

  async save({
    name,
    quality,
    lat,
    long,
    data,
  }: ISaveStreetDataDTO): Promise<Street> {
    const mappedData = data.map((data) => {
      const coordinatesWithData = new ReadableData();
      Object.assign(coordinatesWithData, data);
      return coordinatesWithData;
    });

    const street = new Street();
    street.name = name;
    street.quality = quality;
    street.lat = lat;
    street.long = long;
    street.readable_data = mappedData;

    await this.repository.save(street);

    return street;
  }
}

export { StreetRepository };
