// Clase Computadora con atributos opcionales
export class Computadora {
    procesador: string;
    ram: string;
    almacenamiento: string;
    tarjetaGrafica: string;
    sistemaOperativo: string;

    constructor(procesador:string,ram:string,almacenamiento:string,tarjetaGrafica:string,sistemaOperativo:string) {
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.tarjetaGrafica = tarjetaGrafica;
        this.sistemaOperativo = sistemaOperativo;
    }

    toString() {
      console.log(`Especificaciones de la Computadora:Procesador: ${this.procesador},RAM: ${this.ram},
        Almacenamiento: ${this.almacenamiento},Tarjeta Gráfica: ${this.tarjetaGrafica},Sistema Operativo: ${this.sistemaOperativo}`);
    }
}
