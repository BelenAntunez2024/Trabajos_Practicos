// Clase Perro
import { Animal } from "./Animal";

export class Perro implements Animal {
    nombre:string
    constructor(pnombre: string) {
        this.nombre = pnombre;
    }
    
    hacerSonido(): void {
      console.log(`${this.nombre} dice: ¡Guau guau!`);
    }
    
    mover(): void {
      console.log(`${this.nombre} corre alegremente.`);
    }
  }
  