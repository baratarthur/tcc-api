"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streetRoutes = void 0;
var express_1 = require("express");
var saveStreet_1 = require("../modules/street/useCases/saveStreet");
var streetRoutes = (0, express_1.Router)();
exports.streetRoutes = streetRoutes;
streetRoutes.post('/', function (request, response) {
    return saveStreet_1.saveStreetController.handle(request, response);
});
