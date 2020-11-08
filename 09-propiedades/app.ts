class Humanu {
    public nombreV:string = "Sin Nombre";
    protected bando:string = "Marvel";
    private nombreReal:string = "Stan Lee";
    private puedePelear:boolean = true;
    private propes:any;

    constructor(nombre:string, bando:string,  nombre_r:string) {
        this.nombreV = nombre;
        this.nombreReal = nombre_r;
        this.bando = bando;

      }
      
      public cambiarEquipoPublico(nuevoEquipo:string):boolean{
        return this.cambiarEquipo(nuevoEquipo);
      }

      private cambiarEquipo(nuevoEquipo:string):boolean{
          if(nuevoEquipo == this.bando){
            return false;

          }else{
              return true;
          }
      }

    public bio():void{
    
        let mensaje:string = `${this.nombreV} ${this.nombreReal} ${this.bando}`
        console.log(mensaje);
    }

}

let antman:Humanu = new Humanu("Antman" , "Capitan", "Scott Lang");

antman.bio()