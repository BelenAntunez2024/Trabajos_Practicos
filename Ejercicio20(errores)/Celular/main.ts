import { Bateria } from './Bateria';
import { Smartphone } from './Smartphone';

try {
    const bateria = new Bateria(5000); // Batería de 5000mAh
    const smartphone = new Smartphone("Galaxy S21", "Samsung", bateria, true);

    console.log(smartphone.getModelo()); // Galaxy S21
    console.log(smartphone.getTieneCamara()); // true
    console.log(smartphone.getBateria().getCapacidad()); // 5000

    // Intenta establecer una capacidad de batería inválida
    smartphone.getBateria().setCapacidad(-1000); // Esto lanzará un error

} catch (error) {
    console.error("Error al crear o modificar el smartphone:", error.message);
}
