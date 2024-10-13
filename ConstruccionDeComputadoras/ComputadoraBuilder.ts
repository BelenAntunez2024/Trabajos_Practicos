// Clase Builder para construir paso a paso la computadora
import { Computadora } from "./Computadora";

export class ComputadoraBuilder {
    private procesador: string = "Intel i9";
    private ram: string = "32GB";
    private almacenamiento: string = "1BT SSD";
    private tarjetaGrafica: string = "NVIDIA RTX 3080";
    private sistemaOperativo: string = "Windows 11";

    setProcesador(procesador: string): ComputadoraBuilder {
        this.procesador = procesador;
        return this;
    }

    setRAM(ram: string): ComputadoraBuilder {
        this.ram = ram;
        return this;
    }

    setAlmacenamiento(almacenamiento: string): ComputadoraBuilder{
        this.almacenamiento = almacenamiento;
        return this;
    }

    setTarjetaGrafica(tarjetaGrafica: string): ComputadoraBuilder{
        this.tarjetaGrafica = tarjetaGrafica;
        return this;
    }

    setSistemaOperativo(sistemaOperativo: string): ComputadoraBuilder{
        this.sistemaOperativo = sistemaOperativo;
        return this; 
    }

    build(): Computadora {
        return new Computadora(
        this.procesador,this.ram,this.almacenamiento,this.tarjetaGrafica,this.sistemaOperativo);
    }
}
