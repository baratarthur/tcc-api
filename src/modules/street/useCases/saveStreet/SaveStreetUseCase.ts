import { Data, IStreetRepository } from '../../repositories/IStreetRepository';

interface IRequest {
  data: Data[]
}

class SaveStreetUseCase {
  constructor(private streetRepository: IStreetRepository) {}

  execute({ data }: IRequest) {
    this.streetRepository.save({ data });
  }
}

export { SaveStreetUseCase };
