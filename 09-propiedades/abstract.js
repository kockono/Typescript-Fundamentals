"use strict";
class Mutantes {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
}
class Xmens extends Mutantes {
}
let Scarlet = new Xmens("Wolverine", "Logan");
console.log(Scarlet);
