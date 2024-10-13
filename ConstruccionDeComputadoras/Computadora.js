"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
// Clase Computadora con atributos opcionales
var Computadora = /** @class */ (function () {
    function Computadora(procesador, ram, almacenamiento, tarjetaGrafica, sistemaOperativo) {
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.tarjetaGrafica = tarjetaGrafica;
        this.sistemaOperativo = sistemaOperativo;
    }
    Computadora.prototype.toString = function () {
        console.log("Especificaciones de la Computadora:Procesador: ".concat(this.procesador, ",RAM: ").concat(this.ram, ",\n        Almacenamiento: ").concat(this.almacenamiento, ",Tarjeta Gr\u00E1fica: ").concat(this.tarjetaGrafica, ",Sistema Operativo: ").concat(this.sistemaOperativo));
    };
    return Computadora;
}());
exports.Computadora = Computadora;
