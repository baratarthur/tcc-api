import { Localization } from "../models/Localization";
import { Street } from "../models/Street";

interface Data {
    lat: number;
    long: number;
    x: number;
    y: number;
    z: number;
}

interface ISaveStreetDataDTO {
    data: Data[];
}

interface IStreetRepository {
  save({ data }: ISaveStreetDataDTO);
  getRange(locStart: Localization, locEnd: Localization): Street[];
}

export { IStreetRepository, ISaveStreetDataDTO, Data };
