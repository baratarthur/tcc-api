"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveStreetController = void 0;
var SaveStreetController = /** @class */ (function () {
    function SaveStreetController(saveStreetUseCase) {
        this.saveStreetUseCase = saveStreetUseCase;
    }
    SaveStreetController.prototype.handle = function (request, response) {
        var data = request.body.data;
        this.saveStreetUseCase.execute({ data: data });
        return response.status(201).send("data saved");
    };
    return SaveStreetController;
}());
exports.SaveStreetController = SaveStreetController;
