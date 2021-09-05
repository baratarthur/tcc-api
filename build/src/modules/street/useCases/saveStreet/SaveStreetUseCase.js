"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveStreetUseCase = void 0;
var SaveStreetUseCase = /** @class */ (function () {
    function SaveStreetUseCase(streetRepository) {
        this.streetRepository = streetRepository;
    }
    SaveStreetUseCase.prototype.execute = function (_a) {
        var data = _a.data;
        this.streetRepository.save({ data: data });
    };
    return SaveStreetUseCase;
}());
exports.SaveStreetUseCase = SaveStreetUseCase;
