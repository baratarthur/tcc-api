"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreetRepository = void 0;
var Localization_1 = require("../../models/Localization");
var Street_1 = require("../../models/Street");
var StreetRepository = /** @class */ (function () {
    function StreetRepository() {
        this.streetsData = [];
    }
    StreetRepository.prototype.save = function (_a) {
        var data = _a.data;
        var media = data.reduce(function (total, valor) { return total + valor.z / data.length; }, 0);
        var variancia = data.reduce(function (total, valor) { return total + Math.pow(media - valor.z, 2) / data.length; }, 0);
        var desvioPadrao = Math.sqrt(variancia);
        var street = new Street_1.Street();
        var streetLocalization = data.map(function (streetLoc) {
            var loc = new Localization_1.Localization();
            Object.assign(loc, {
                lat: streetLoc.lat,
                long: streetLoc.long,
                z: streetLoc.z
            });
            return loc;
        });
        Object.assign(street, {
            points: streetLocalization,
            quality: this.getStreetQuality(desvioPadrao)
        });
        this.streetsData.push(street);
    };
    StreetRepository.prototype.getRange = function (locStart, locEnd) {
        return this.streetsData.filter(function (street) { return street.points
            .some(function (point) {
            return (point.lat > locStart.lat && point.lat < locEnd.lat)
                && (point.long < locStart.long && point.long > locEnd.long);
        }); });
    };
    StreetRepository.prototype.getStreetQuality = function (desvioPadrao) {
        if (desvioPadrao < 0.3) {
            return 'OTIMA';
        }
        else if (desvioPadrao < 0.6) {
            return 'PRECISA DE REPAROS';
        }
        else {
            return 'VIA EM CONDICOES CRITICAS';
        }
    };
    StreetRepository.getInstance = function () {
        if (!StreetRepository.INSTANCE) {
            StreetRepository.INSTANCE = new StreetRepository();
        }
        return StreetRepository.INSTANCE;
    };
    return StreetRepository;
}());
exports.StreetRepository = StreetRepository;
