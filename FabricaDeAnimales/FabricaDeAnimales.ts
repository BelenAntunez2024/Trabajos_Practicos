import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";
import { Animal } from "./Animal";
export class FabricaDeAnimales {
  static crearAnimal(tipo: string, nombre: string): Animal {
    if (tipo === 'perro') {
      return new Perro(nombre);
    } else if (tipo === 'gato') {
      return new Gato(nombre);
    } else if (tipo === 'pajaro') {
      return new Pajaro(nombre);
    } else {
      throw new Error ('Tipo de animal no soportado');
    }
  }
}
