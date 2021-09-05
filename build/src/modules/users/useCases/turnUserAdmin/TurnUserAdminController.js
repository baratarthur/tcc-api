"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnUserAdminController = void 0;
var TurnUserAdminController = /** @class */ (function () {
    function TurnUserAdminController(turnUserAdminUseCase) {
        this.turnUserAdminUseCase = turnUserAdminUseCase;
    }
    TurnUserAdminController.prototype.handle = function (request, response) {
        var user_id = request.params.user_id;
        try {
            var userModified = this.turnUserAdminUseCase.execute({ user_id: user_id });
            return response.status(200).send(userModified);
        }
        catch (error) {
            return response.status(404).send({ error: error.message });
        }
    };
    return TurnUserAdminController;
}());
exports.TurnUserAdminController = TurnUserAdminController;
