import { Alumno } from './alumno';
import { Profesor } from './profesor';
import { Curso } from './curso';

try {
    // Crear algunos alumnos
    let alumno1 = new Alumno("Juan", "Pérez");
    let alumno2 = new Alumno("María", "García");

    // Crear un curso y agregar alumnos
    let curso1 = new Curso("Matemáticas");
    curso1.agregarAlumno(alumno1);
    curso1.agregarAlumno(alumno2);

    // Crear un profesor asignado al curso
    let profesor1 = new Profesor("Carlos", "Lopez", curso1);

    // Obtener los alumnos a través del profesor
    console.log(profesor1.getAlumnos());  // Muestra la lista de alumnos en el curso de Matemáticas

} catch (error) {
    console.error("Error:", error.message);
}
