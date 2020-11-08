"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Xmen {
    constructor(nombre, poder) {
        this.nombreHeroe = poder;
        this.poderHeroe = nombre;
    }
    imprimir() {
        console.log(`${this.nombreHeroe},${this.poderHeroe}`);
    }
}
exports.Xmen = Xmen;
