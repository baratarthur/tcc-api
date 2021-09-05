"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Street = void 0;
var uuid_1 = require("uuid");
var Street = /** @class */ (function () {
    function Street() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    return Street;
}());
exports.Street = Street;
