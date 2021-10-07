import { createConnection } from "typeorm";

import config from "../../ormconfig.js";

createConnection(config);
