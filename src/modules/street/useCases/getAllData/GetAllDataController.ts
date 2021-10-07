import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllDataUseCase } from "./GetAllDataUseCase";

class GetAllDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const saveStreetUseCase = container.resolve(GetAllDataUseCase);

    try {
      const streets = await saveStreetUseCase.execute();
      return response
        .status(201)
        .send({ message: "Data found", code: "S2", streets });
    } catch (error) {
      return response.status(500).send({
        code: "E2",
        message: "Couldn;t get street data",
        error: error.message,
      });
    }
  }
}

export { GetAllDataController };
