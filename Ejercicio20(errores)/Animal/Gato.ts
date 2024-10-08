// Gato.ts
import { Animal } from './Animal';
import { IAnimal } from './IAnimal';

export class Gato extends Animal implements IAnimal {
  constructor(nombre: string) {
    super(nombre);
  }

  emitirSonido(): void {
    console.log("¡Miau!");
  }
}
