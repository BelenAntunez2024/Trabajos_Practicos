// app.ts
import { Perro } from './Perro';
import { Gato } from './Gato';

try {
  let miPerro = new Perro("Rex");
  miPerro.moverse();       // Output: Rex se mueve...
  miPerro.emitirSonido();  // Output: ¡Guau!

  let miGato = new Gato("MiauMiau");
  miGato.moverse();        // Output: MiauMiau se mueve...
  miGato.emitirSonido();   // Output: ¡Miau!

  // Ejemplo de un error: crear un animal sin nombre
  let gatoSinNombre = new Gato("");
} catch (error) {
  console.error("Error al crear el animal:", error.message);
}
