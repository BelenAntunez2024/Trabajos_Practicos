export class Bateria {
    private capacidad: number; // en mAh

    constructor(capacidad: number) {
        if (capacidad <= 0) {
            throw new Error("La capacidad de la batería debe ser mayor que 0.");
        }
        this.capacidad = capacidad;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }

    public setCapacidad(capacidad: number): void {
        if (capacidad <= 0) {
            throw new Error("La capacidad de la batería debe ser mayor que 0.");
        }
        this.capacidad = capacidad;
    }
}
