"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
var CreateUserController = /** @class */ (function () {
    function CreateUserController(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    CreateUserController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, email = _a.email;
        try {
            var newUser = this.createUserUseCase.execute({ name: name, email: email });
            return response.status(201).send(newUser);
        }
        catch (error) {
            return response.status(400).send({ error: error.message });
        }
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
