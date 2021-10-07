import { Street } from "../entities/Street";

interface IStreetData {
  lat: number;
  long: number;
  x_value: number;
  y_value: number;
  z_value: number;
}

interface ISaveStreetDataDTO {
  name: string;
  data: IStreetData[];
}

interface IStreetRepository {
  save({ name, data }: ISaveStreetDataDTO): Promise<Street>;
  getAll(): Promise<Street[]>;
}

export { IStreetRepository, ISaveStreetDataDTO, IStreetData };
