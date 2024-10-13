// Clase Pajaro
import { Animal } from "./Animal";

export class Pajaro implements Animal {
    nombre:string;
    constructor(pnombre: string) {
        this.nombre = pnombre;
    }
    
    hacerSonido(): void {
      console.log(`${this.nombre} canta: ¡Pío pío!`);
    }
    
    mover(): void {
      console.log(`${this.nombre} vuela alto en el cielo.`);
    }
  }