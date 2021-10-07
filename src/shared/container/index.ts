import { container } from "tsyringe";

import { StreetRepository } from "../../modules/street/repositories/implementations/StreetRepository";
import { IStreetRepository } from "../../modules/street/repositories/IStreetRepository";

container.registerSingleton<IStreetRepository>(
  "StreetRepository",
  StreetRepository
);
