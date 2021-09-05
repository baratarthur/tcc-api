"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
var User_1 = require("../../model/User");
var UsersRepository = /** @class */ (function () {
    function UsersRepository() {
        this.users = [];
    }
    UsersRepository.getInstance = function () {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    };
    UsersRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email;
        var user = new User_1.User();
        Object.assign(user, {
            name: name,
            email: email,
            created_at: new Date(),
            updated_at: new Date()
        });
        this.users.push(user);
        return user;
    };
    UsersRepository.prototype.findById = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    UsersRepository.prototype.findByEmail = function (email) {
        return this.users.find(function (user) { return user.email === email; });
    };
    UsersRepository.prototype.turnAdmin = function (receivedUser) {
        var targetUser = this.users.find(function (user) { return user.id === receivedUser.id; });
        targetUser.admin = true;
        targetUser.updated_at = new Date();
        return targetUser;
    };
    UsersRepository.prototype.list = function () {
        return this.users;
    };
    return UsersRepository;
}());
exports.UsersRepository = UsersRepository;
