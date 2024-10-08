export class Alumno {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        if (!nombre || !apellido) {
            throw new Error("El nombre y el apellido no pueden estar vacíos.");
        }
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }
}
