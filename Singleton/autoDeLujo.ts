export class AutoDeLujo{
    private static instancia: AutoDeLujo
     marca:string;
     modelo:string;
     precio:number;

    private constructor(pmarca:string,pmodelo:string,pprecio:number){
      this.marca = pmarca;
      this.modelo = pmodelo;
      this.precio =pprecio;
    }
    public static getInstancia(pmarca:string,pmodelo:string,pprecio:number):AutoDeLujo{
        if(!AutoDeLujo.instancia){
            AutoDeLujo.instancia =  new AutoDeLujo(pmarca,pmodelo,pprecio)
        }else{
            console.log("Ya existe un auto de lujo, no se puede crear otro");
        }
    }
    public mostrarDetalles():void{
        console.log("Auto de Lujo" + this.marca+ this.modelo + this.precio);
    }



}

const autoDeLujo1 = AutoDeLujo.getInstancia("Ferrari","S8 Turbo",3000000);
autoDeLujo1.mostrarDetalles();