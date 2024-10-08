export abstract class Animal {
  protected nombre: string;

  constructor(nombre: string) {
    if (!nombre) {
      throw new Error("El nombre del animal no puede estar vacío.");
    }
    this.nombre = nombre;
  }

  moverse(): void {
    console.log(`${this.nombre} se mueve...`);
  }

  abstract emitirSonido(): void;
}
