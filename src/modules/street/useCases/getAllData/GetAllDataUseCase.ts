import { Street } from "modules/street/entities/Street";
import { inject, injectable } from "tsyringe";

import { IStreetRepository } from "../../repositories/IStreetRepository";

@injectable()
class GetAllDataUseCase {
  constructor(
    @inject("StreetRepository")
    private streetRepository: IStreetRepository
  ) {}

  async execute(): Promise<Street[]> {
    const streets = await this.streetRepository.getAll();
    return streets;
  }
}

export { GetAllDataUseCase };
