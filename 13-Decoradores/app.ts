// Los decoradores de clase reciben el constructor de la función
function planVillano(constructor:Function) {

    constructor.prototype.imprimirPLan = function() {
        console.log("El plan de " + this.nombre + " es dominar el mundo!");
    }

}

@planVillano
class Evil {

    constructor(public nombre:string) {
        
    }

}

let lex = new Evil(" Lex Luthor");
(<any>lex).imprimirPLan();