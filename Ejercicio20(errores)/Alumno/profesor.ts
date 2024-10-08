import { Curso } from "./curso";
import { Alumno } from "./alumno";

export class Profesor {
    private nombre: string;
    private apellido: string;
    private curso: Curso;

    constructor(pNombre: string, pApellido: string, curso: Curso) {
        if (!pNombre || !pApellido) {
            throw new Error("El nombre y el apellido del profesor no pueden estar vacíos.");
        }
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.curso = curso;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getCurso(): Curso {
        return this.curso;
    }

    public agregarAlumno(alumno: Alumno): void {
        this.curso.agregarAlumno(alumno);
    }

    public getAlumnos(): Alumno[] {
        return this.curso.getAlumnos();
    }
}

