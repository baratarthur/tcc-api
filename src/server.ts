import * as dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./shared/container";
import "./database";

dotenv.config({ path: `${__dirname}/.env` });

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
  return response.status(200).send({ message: "YaY, API is running 2.0!" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log("Server is running!"));
