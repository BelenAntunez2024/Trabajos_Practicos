"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(pnombre) {
        this.nombre = pnombre;
    }
    Gato.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, " dice: \u00A1Miau!"));
    };
    Gato.prototype.mover = function () {
        console.log("".concat(this.nombre, " se mueve sigilosamente."));
    };
    return Gato;
}());
exports.Gato = Gato;
