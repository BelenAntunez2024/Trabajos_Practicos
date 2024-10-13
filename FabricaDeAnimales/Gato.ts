// Clase Gato
import { Animal } from "./Animal";

export class Gato implements Animal {
    nombre:string
    constructor(pnombre: string) {
        this.nombre = pnombre;
    }
    
    hacerSonido(): void {
      console.log(`${this.nombre} dice: ¡Miau!`);
    }
    
    mover(): void {
      console.log(`${this.nombre} se mueve sigilosamente.`);
    }
  }