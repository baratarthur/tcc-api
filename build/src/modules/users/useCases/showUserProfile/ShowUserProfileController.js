"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserProfileController = void 0;
var ShowUserProfileController = /** @class */ (function () {
    function ShowUserProfileController(showUserProfileUseCase) {
        this.showUserProfileUseCase = showUserProfileUseCase;
    }
    ShowUserProfileController.prototype.handle = function (request, response) {
        var user_id = request.params.user_id;
        try {
            var userRequested = this.showUserProfileUseCase.execute({ user_id: user_id });
            return response.status(200).send(userRequested);
        }
        catch (error) {
            return response.status(404).send({ error: error.message });
        }
    };
    return ShowUserProfileController;
}());
exports.ShowUserProfileController = ShowUserProfileController;
