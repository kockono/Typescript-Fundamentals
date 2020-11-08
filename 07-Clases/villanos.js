"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Villanos {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    imprimir() {
        console.log(`${this.nombre},${this.poder}`);
    }
}
exports.Villanos = Villanos;
