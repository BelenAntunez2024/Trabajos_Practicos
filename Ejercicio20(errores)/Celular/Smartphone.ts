import { Celular } from './celular';
import { Bateria } from './Bateria';

export class Smartphone extends Celular {
    private tieneCamara: boolean;

    constructor(modelo: string, marca: string, bateria: Bateria, tieneCamara: boolean) {
        super(modelo, marca, bateria);
        if (typeof tieneCamara !== "boolean") {
            throw new Error("El valor de 'tieneCamara' debe ser un booleano.");
        }
        this.tieneCamara = tieneCamara;
    }

    public getTieneCamara(): boolean {
        return this.tieneCamara;
    }

    public setTieneCamara(tieneCamara: boolean): void {
        if (typeof tieneCamara !== "boolean") {
            throw new Error("El valor de 'tieneCamara' debe ser un booleano.");
        }
        this.tieneCamara = tieneCamara;
    }
}
