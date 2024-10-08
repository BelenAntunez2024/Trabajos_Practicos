// Perro.ts
import { Animal } from './Animal';
import { IAnimal } from './IAnimal';

export class Perro extends Animal implements IAnimal {
  constructor(nombre: string) {
    super(nombre);
  }

  emitirSonido(): void {
    console.log("¡Guau!");
  }
}

