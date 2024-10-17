export interface VehiculoElectrico{
    cargarBateria():void;
}
export class AutoCombustible{
    public cargarCombustible():void{
        console.log("Cargando Combustible");
    }

}

export class AdaptadorAutoElectrico implements VehiculoElectrico{
    private autoCombustible: AutoCombustible;
    
    constructor(pauto:AutoCombustible){
        this.autoCombustible = pauto;

    }

    public cargarBateria(): void {
        console.log("Adaptador Activado");
        this.autoCombustible.cargarCombustible();
    }
}
const auto1 = new AutoCombustible();
const autoElectricoAdaptado = new AdaptadorAutoElectrico(auto1);
 autoElectricoAdaptado.cargarBateria();