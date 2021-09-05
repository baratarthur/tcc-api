"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersUseCase = void 0;
var ListAllUsersUseCase = /** @class */ (function () {
    function ListAllUsersUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ListAllUsersUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id;
        var userRequest = this.usersRepository.findById(user_id);
        if (!userRequest)
            throw new Error("User not found");
        if (!userRequest.admin)
            throw new Error("Access Denied");
        return this.usersRepository.list();
    };
    return ListAllUsersUseCase;
}());
exports.ListAllUsersUseCase = ListAllUsersUseCase;
