"use strict";
class Xmen2 {
    constructor() {
    }
    static crearXmen() {
        console.log("Se creo usando un metodo estatico");
        return new Xmen2();
    }
}
Xmen2.nombre = "Wolverine";
let wolverine2 = Xmen2.crearXmen(); // Puedes lograr mandar a llamar un instancia
console.log(Xmen2.nombre);
