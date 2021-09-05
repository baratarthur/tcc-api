import { Router } from "express";
import { saveStreetController } from "../modules/street/useCases/saveStreet";

const streetRoutes = Router();

streetRoutes.post('/', (request, response) =>
    saveStreetController.handle(request, response)
);

export { streetRoutes };
