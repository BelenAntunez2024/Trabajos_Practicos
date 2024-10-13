"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeAnimales = void 0;
var Perro_1 = require("./Perro");
var Gato_1 = require("../Gato");
var Pajaro_1 = require("../Pajaro");
var FabricaDeAnimales = /** @class */ (function () {
    function FabricaDeAnimales() {
    }
    FabricaDeAnimales.crearAnimal = function (tipo, nombre) {
        if (tipo === 'perro') {
            return new Perro_1.Perro(nombre);
        }
        else if (tipo === 'gato') {
            return new Gato_1.Gato(nombre);
        }
        else if (tipo === 'pajaro') {
            return new Pajaro_1.Pajaro(nombre);
        }
        else {
            throw new Error('Tipo de animal no soportado');
        }
    };
    return FabricaDeAnimales;
}());
exports.FabricaDeAnimales = FabricaDeAnimales;
