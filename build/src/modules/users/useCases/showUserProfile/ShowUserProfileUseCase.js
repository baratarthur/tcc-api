"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserProfileUseCase = void 0;
var ShowUserProfileUseCase = /** @class */ (function () {
    function ShowUserProfileUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ShowUserProfileUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id;
        var requestedUser = this.usersRepository.findById(user_id);
        if (!requestedUser)
            throw new Error("User doesn't exists");
        return requestedUser;
    };
    return ShowUserProfileUseCase;
}());
exports.ShowUserProfileUseCase = ShowUserProfileUseCase;
