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

@injectable()
class SaveStreetUseCase {
  constructor(
    @inject("StreetRepository")
    private streetRepository: IStreetRepository
  ) {}

  async execute({ street_name, lat, long, data }: IRequest): Promise<Street> {
    const street = await this.streetRepository.save({
      name: street_name,
      lat,
      long,
      data,
    });
    return street;
  }
}

export { SaveStreetUseCase };
