"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersController = void 0;
var ListAllUsersController = /** @class */ (function () {
    function ListAllUsersController(listAllUsersUseCase) {
        this.listAllUsersUseCase = listAllUsersUseCase;
    }
    ListAllUsersController.prototype.handle = function (request, response) {
        var user_id = request.header('user_id');
        try {
            var usersList = this.listAllUsersUseCase.execute({ user_id: user_id });
            return response.status(200).send(usersList);
        }
        catch (error) {
            return response.status(400).send({ error: error.message });
        }
    };
    return ListAllUsersController;
}());
exports.ListAllUsersController = ListAllUsersController;
