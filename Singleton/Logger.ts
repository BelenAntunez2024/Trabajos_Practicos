class Logger {
    private static instance: Logger;
    private Contadormensaje: number;

    // Constructor privado para evitar que se creen nuevas instancias
    private constructor() {
        this.Contadormensaje = 0;
    }

    // Método para obtener la instancia única
    public static getInstancia(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }else{
            console.log("Ya Existe una instancia");
        }
        return Logger.instance;
    }

    // Método para registrar mensajes
    public RegistroMensaje(mensaje: string): void {
        this.Contadormensaje++;
        console.log(`[${this.Contadormensaje}] ${mensaje}`);
    }
}

// Ejemplo de uso
const logger1 = Logger.getInstancia();
logger1.RegistroMensaje("Este es el primer mensaje.");

const logger2 = Logger.getInstancia();
logger2.RegistroMensaje("Este es el segundo mensaje.");

const logger3 = Logger.getInstancia();
logger3.RegistroMensaje("Este es el tercer mensaje.");
