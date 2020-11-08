"use strict";
class Humanu {
    constructor(nombre, bando, nombre_r) {
        this.nombreV = "Sin Nombre";
        this.bando = "Marvel";
        this.nombreReal = "Stan Lee";
        this.puedePelear = true;
        this.nombreV = nombre;
        this.nombreReal = nombre_r;
        this.bando = bando;
    }
    cambiarEquipoPublico(nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    }
    cambiarEquipo(nuevoEquipo) {
        if (nuevoEquipo == this.bando) {
            return false;
        }
        else {
            return true;
        }
    }
    bio() {
        let mensaje = `${this.nombreV} ${this.nombreReal} ${this.bando}`;
        console.log(mensaje);
    }
}
let antman = new Humanu("Antman", "Capitan", "Scott Lang");
antman.bio();
