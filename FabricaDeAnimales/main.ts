import { FabricaDeAnimales } from "./FabricaDeAnimales";

let fabrica = new FabricaDeAnimales();
let perro = FabricaDeAnimales.crearAnimal('perro', "Duo");
perro.hacerSonido();
perro.mover();

let gato = FabricaDeAnimales.crearAnimal('gato', 'Misu');
gato.hacerSonido();
gato.mover();

let pajaro = FabricaDeAnimales.crearAnimal('pajaro', 'Piolin');
pajaro.hacerSonido();
pajaro.mover();