import { Response, Request } from "express";
import { SaveStreetUseCase } from "./SaveStreetUseCase";

class SaveStreetController {
  constructor(private saveStreetUseCase: SaveStreetUseCase) {}

  handle(request: Request, response: Response): Response {
    const { data } = request.body;
    this.saveStreetUseCase.execute({ data });
    return response.status(201).send("data saved");
  }
}

export { SaveStreetController };
