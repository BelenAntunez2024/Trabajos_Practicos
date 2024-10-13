"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
var Pajaro = /** @class */ (function () {
    function Pajaro(pnombre) {
        this.nombre = pnombre;
    }
    Pajaro.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, " canta: \u00A1P\u00EDo p\u00EDo!"));
    };
    Pajaro.prototype.mover = function () {
        console.log("".concat(this.nombre, " vuela alto en el cielo."));
    };
    return Pajaro;
}());
exports.Pajaro = Pajaro;
