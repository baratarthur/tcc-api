"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localization = void 0;
var uuid_1 = require("uuid");
var Localization = /** @class */ (function () {
    function Localization() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    return Localization;
}());
exports.Localization = Localization;
