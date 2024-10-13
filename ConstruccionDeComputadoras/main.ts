import { ComputadoraBuilder } from "./ComputadoraBuilder";

const miComputadora = new ComputadoraBuilder();
    miComputadora.setProcesador("AMD Ryzen 7");
    miComputadora.setRAM("16GB");
    miComputadora.setAlmacenamiento("512GB SSD");
    miComputadora.setTarjetaGrafica("AMD Radeon RX 6700 XT");
    miComputadora.setSistemaOperativo("Linux Ubuntu");

let computadoraNueva = miComputadora.build();
console.log(computadoraNueva.toString());