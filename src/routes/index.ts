import { Router } from "express";

import { streetRoutes } from "./street.routes";

const router = Router();

router.use("/street", streetRoutes);

export { router };
