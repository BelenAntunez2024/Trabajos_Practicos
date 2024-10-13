"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadoraBuilder = void 0;
// Clase Builder para construir paso a paso la computadora
var Computadora_1 = require("./Computadora");
var ComputadoraBuilder = /** @class */ (function () {
    function ComputadoraBuilder() {
        this.procesador = "Intel i9";
        this.ram = "32GB";
        this.almacenamiento = "1BT SSD";
        this.tarjetaGrafica = "NVIDIA RTX 3080";
        this.sistemaOperativo = "Windows 11";
    }
    ComputadoraBuilder.prototype.setProcesador = function (procesador) {
        this.procesador = procesador;
        return this;
    };
    ComputadoraBuilder.prototype.setRAM = function (ram) {
        this.ram = ram;
        return this;
    };
    ComputadoraBuilder.prototype.setAlmacenamiento = function (almacenamiento) {
        this.almacenamiento = almacenamiento;
        return this;
    };
    ComputadoraBuilder.prototype.setTarjetaGrafica = function (tarjetaGrafica) {
        this.tarjetaGrafica = tarjetaGrafica;
        return this;
    };
    ComputadoraBuilder.prototype.setSistemaOperativo = function (sistemaOperativo) {
        this.sistemaOperativo = sistemaOperativo;
        return this;
    };
    ComputadoraBuilder.prototype.build = function () {
        return new Computadora_1.Computadora(this.procesador, this.ram, this.almacenamiento, this.tarjetaGrafica, this.sistemaOperativo);
    };
    return ComputadoraBuilder;
}());
exports.ComputadoraBuilder = ComputadoraBuilder;
