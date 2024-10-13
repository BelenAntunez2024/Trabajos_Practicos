"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Perro = /** @class */ (function () {
    function Perro(pnombre) {
        this.nombre = pnombre;
    }
    Perro.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, " dice: \u00A1Guau guau!"));
    };
    Perro.prototype.mover = function () {
        console.log("".concat(this.nombre, " corre alegremente."));
    };
    return Perro;
}());
exports.Perro = Perro;
