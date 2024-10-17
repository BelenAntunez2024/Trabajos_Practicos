"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptadorAutoElectrico = exports.AutoCombustible = void 0;
var AutoCombustible = /** @class */ (function () {
    function AutoCombustible() {
    }
    AutoCombustible.prototype.cargarCombustible = function () {
        console.log("Cargando Combustible");
    };
    return AutoCombustible;
}());
exports.AutoCombustible = AutoCombustible;
var AdaptadorAutoElectrico = /** @class */ (function () {
    function AdaptadorAutoElectrico(pauto) {
        this.autoCombustible = pauto;
    }
    AdaptadorAutoElectrico.prototype.cargarBateria = function () {
        console.log("Adaptador Activado");
        this.autoCombustible.cargarCombustible();
    };
    return AdaptadorAutoElectrico;
}());
exports.AdaptadorAutoElectrico = AdaptadorAutoElectrico;
var auto1 = new AutoCombustible();
var autoElectricoAdaptado = new AdaptadorAutoElectrico(auto1);
autoElectricoAdaptado.cargarBateria();
