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
  quality: string;
  lat: number;
  long: number;
  data: IStreetData[];
}

interface IStreetRepository {
  save({ name, quality, lat, long, data }: ISaveStreetDataDTO): Promise<Street>;
  getAll(): Promise<Street[]>;
}

export { IStreetRepository, ISaveStreetDataDTO, IStreetData };
