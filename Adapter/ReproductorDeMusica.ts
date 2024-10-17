interface ReproductorDeMusica{
    reproducir():void;
    detener():void;
}

class Vinilo{
    colocarAguja():void{
        console.log("Colocando Aguja en el Vinilo");
    }
    levantarAguja():void{
        console.log("Levantando Aguja del Vinilo");
    
    }
}

class AdaptadorDeVinilo implements ReproductorDeMusica{
    private vinilo:Vinilo;
   
    constructor(pvinilo:Vinilo){
        this.vinilo = pvinilo
    }
    
    reproducir(): void {
        this.vinilo.colocarAguja(); //Adaptamos el metodo ColocarAguja
    }
    detener(): void {
        this.vinilo.levantarAguja(); //Adaptamos el metodo LevantarAguja
    }

}

const miVinilo = new Vinilo();
const reproductorAdaptado:ReproductorDeMusica = new AdaptadorDeVinilo(miVinilo);

reproductorAdaptado.reproducir() //Colocando la Aguja en el vinilo
reproductorAdaptado.detener() //Levantando la aguja del vinilo