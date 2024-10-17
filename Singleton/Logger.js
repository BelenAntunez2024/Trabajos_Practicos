var Logger = /** @class */ (function () {
    // Constructor privado para evitar que se creen nuevas instancias
    function Logger(pmensaje) {
        this.mensaje = pmensaje;
    }
    // Método para obtener la instancia única
    Logger.getInstancia = function (pmensaje) {
        if (pmensaje === void 0) { pmensaje = 0; }
        if (!Logger.instance) {
            Logger.instance = new Logger(pmensaje);
        }
        return Logger.instance;
    };
    // Método para registrar mensajes
    Logger.prototype.log = function (texto) {
        this.mensaje++;
        console.log("[".concat(this.mensaje, "] ").concat(texto));
    };
    return Logger;
}());
// Ejemplo de uso
var logger1 = Logger.getInstancia();
logger1.log("Este es el primer mensaje.");
logger1.log("Este es el segundo mensaje.");
var logger2 = Logger.getInstancia();
logger2.log("Este es el tercer mensaje.");
