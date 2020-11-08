"use strict";
class Abenger {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        if (nombre.length <= 3) {
            throw new Error("El nombre debe tener al menos 4 caracteres");
            // return;
        }
        this._nombre = nombre;
    }
}
let ciclope = new Abenger("Chumaya");
console.log(ciclope.nombre);
ciclope.nombre = "Lee";
console.log(ciclope.nombre);
