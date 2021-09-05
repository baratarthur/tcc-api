"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnUserAdminUseCase = void 0;
var TurnUserAdminUseCase = /** @class */ (function () {
    function TurnUserAdminUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    TurnUserAdminUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id;
        var requestedUser = this.usersRepository.findById(user_id);
        if (!requestedUser)
            throw new Error('User not found');
        return this.usersRepository.turnAdmin(requestedUser);
    };
    return TurnUserAdminUseCase;
}());
exports.TurnUserAdminUseCase = TurnUserAdminUseCase;
