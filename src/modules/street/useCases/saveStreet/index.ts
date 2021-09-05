import { StreetRepository } from "../../repositories/implementations/StreetRepository";
import { SaveStreetController } from "./SaveStreetController";
import { SaveStreetUseCase } from "./SaveStreetUseCase";


const repo = StreetRepository.getInstance();

const useCase = new SaveStreetUseCase(repo);

const saveStreetController = new SaveStreetController(useCase);

export { saveStreetController };
