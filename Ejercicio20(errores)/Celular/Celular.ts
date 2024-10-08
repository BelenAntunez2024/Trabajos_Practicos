import { Bateria } from './Bateria';

export class Celular {
    private modelo: string;
    private marca: string;
    private bateria: Bateria;

    constructor(modelo: string, marca: string, bateria: Bateria) {
        if (!modelo || !marca) {
            throw new Error("El modelo y la marca no pueden estar vacíos.");
        }
        this.modelo = modelo;
        this.marca = marca;
        this.bateria = bateria;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        if (!modelo) {
            throw new Error("El modelo no puede estar vacío.");
        }
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        if (!marca) {
            throw new Error("La marca no puede estar vacía.");
        }
        this.marca = marca;
    }

    public getBateria(): Bateria {
        return this.bateria;
    }

    public setBateria(bateria: Bateria): void {
        this.bateria = bateria;
    }
}
