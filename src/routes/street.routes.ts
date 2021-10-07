import { Router } from "express";

import { GetAllDataController } from "../modules/street/useCases/getAllData/GetAllDataController";
import { SaveStreetController } from "../modules/street/useCases/saveStreet/SaveStreetController";

const streetRoutes = Router();

const saveStreetController = new SaveStreetController();
streetRoutes.post("/", saveStreetController.handle);

const getAllDataController = new GetAllDataController();
streetRoutes.get("/", getAllDataController.handle);

export { streetRoutes };
