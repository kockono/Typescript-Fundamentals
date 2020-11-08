class Xmen2{

    static nombre:string = "Wolverine";

    constructor() {
        
    }

    static crearXmen(){
        console.log("Se creo usando un metodo estatico");
        return new Xmen2();
    }
    

}

let wolverine2 = Xmen2.crearXmen(); // Puedes lograr mandar a llamar un instancia

console.log(Xmen2.nombre);