"use strict";
console.log("Hola mundo");
let notSure = 4; //Puede ser cualquier objeto o tipo o valor
let isDone = false;
const color = "blue";
let nombrePrueba = "Chris";
let apellido = "Marquez";
let edad = 22;
let hoy = new Date();
hoy = new Date("2020-01-17");
let texto = `Hola, ${nombrePrueba}${apellido}(${edad})`; //Concatenacion
console.log(texto.toUpperCase());
function getNombre() {
    return "Fernando";
}
let texto2 = `${getNombre()}`;
function activar(quien, objeto = "Batiseñal", momento) {
    let message;
    message = `${quien} activo la batiseñal`;
    console.log(quien);
    return quien;
}
activar("Gordon");
let miFuncion = (a) => a;
console.log(miFuncion("H"));
