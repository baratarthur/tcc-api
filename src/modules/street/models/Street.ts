import { v4 as uuidV4 } from "uuid";
import { Localization } from "./Localization";

class Street {
  id?: string;
  quality: string; //TODO: usar enum
  points: Localization[];
  created_at?: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Street };
