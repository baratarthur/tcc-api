"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var street_routes_1 = require("./routes/street.routes");
var users_routes_1 = require("./routes/users.routes");
var app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.get("/", function (request, response) {
    return response.status(200).send({ message: "YaY, API is running!" });
});
app.use("/users", users_routes_1.usersRoutes);
app.use("/street", street_routes_1.streetRoutes);
