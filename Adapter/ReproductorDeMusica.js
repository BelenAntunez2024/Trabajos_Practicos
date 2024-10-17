var Vinilo = /** @class */ (function () {
    function Vinilo() {
    }
    Vinilo.prototype.colocarAguja = function () {
        console.log("Colocando Aguja en el Vinilo");
    };
    Vinilo.prototype.levantarAguja = function () {
        console.log("Levantando Aguja del Vinilo");
    };
    return Vinilo;
}());
var AdaptadorDeVinilo = /** @class */ (function () {
    function AdaptadorDeVinilo(pvinilo) {
        this.vinilo = pvinilo;
    }
    AdaptadorDeVinilo.prototype.reproducir = function () {
        this.vinilo.colocarAguja(); //Adaptamos el metodo ColocarAguja
    };
    AdaptadorDeVinilo.prototype.detener = function () {
        this.vinilo.levantarAguja(); //Adaptamos el metodo LevantarAguja
    };
    return AdaptadorDeVinilo;
}());
var miVinilo = new Vinilo();
var reproductorAdaptado = new AdaptadorDeVinilo(miVinilo);
reproductorAdaptado.reproducir(); //Colocando la Aguja en el vinilo
reproductorAdaptado.detener(); //Levantando la aguja del vinilo
