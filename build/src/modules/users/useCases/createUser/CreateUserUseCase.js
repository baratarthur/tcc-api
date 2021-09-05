"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
var CreateUserUseCase = /** @class */ (function () {
    function CreateUserUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    CreateUserUseCase.prototype.execute = function (_a) {
        var email = _a.email, name = _a.name;
        if (this.usersRepository.findByEmail(email))
            throw new Error('User email already registered');
        return this.usersRepository.create({ name: name, email: email });
    };
    return CreateUserUseCase;
}());
exports.CreateUserUseCase = CreateUserUseCase;
