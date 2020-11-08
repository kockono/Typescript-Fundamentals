"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "Im" + nombre;
}
function salvarVida() {
    console.log("El mundo esta salvado!");
}
let miFuncion;
miFuncion = 10;
miFuncion = sumar;
miFuncion(5, 5);
miFuncion = salvarVida;
miFuncion();
miFuncion = saludar;
miFuncion("Batman");
