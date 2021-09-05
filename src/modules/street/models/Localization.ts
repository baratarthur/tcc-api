import { v4 as uuidV4 } from "uuid";

class Localization {
  id?: string;
  lat: number;
  long: number;
  z_value?: number;
  created_at?: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Localization };
