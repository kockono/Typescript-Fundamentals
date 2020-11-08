class Avenger {
    nombre:string;
    poder:string;

    constructor(nombre:string, poder:string) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

class AvengerVolador extends Avenger {
    constructor(nombre:string,poder:string) {
        super(nombre, poder);
        
    }
    
}

let hulk = new Avenger("Hulk", "Super Fuerza");

let falcon = new AvengerVolador("Falcon", "Volar")

console.log(hulk);