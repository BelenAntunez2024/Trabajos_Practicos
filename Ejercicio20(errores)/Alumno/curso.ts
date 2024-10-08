import { Alumno } from "./alumno";

export class Curso {
    private nombreCurso: string;
    private listadoDeAlumnos: Alumno[];

    constructor(nombreCurso: string) {
        if (!nombreCurso) {
            throw new Error("El nombre del curso no puede estar vacío.");
        }
        this.nombreCurso = nombreCurso;
        this.listadoDeAlumnos = [];
    }

    public agregarAlumno(alumno: Alumno): void {
        this.listadoDeAlumnos.push(alumno);
    }

    public getAlumnos(): Alumno[] {
        return this.listadoDeAlumnos;
    }

    public getNombreCurso(): string {
        return this.nombreCurso;
    }
}
