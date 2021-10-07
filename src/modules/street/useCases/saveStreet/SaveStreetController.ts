import { Response, Request } from "express";
import { container } from "tsyringe";

import { SaveStreetUseCase } from "./SaveStreetUseCase";

class SaveStreetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { street_name, data } = request.body;
    const saveStreetUseCase = container.resolve(SaveStreetUseCase);

    try {
      const street = await saveStreetUseCase.execute({ street_name, data });
      return response
        .status(201)
        .send({ message: "Data Saved", code: "S1", street });
    } catch (error) {
      return response.status(500).send({
        code: "E1",
        message: "Street was not registred",
        error: error.message,
      });
    }
  }
}

export { SaveStreetController };
