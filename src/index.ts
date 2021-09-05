import express from "express";

import { streetRoutes } from "./routes/street.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/street", streetRoutes);

export { app };
