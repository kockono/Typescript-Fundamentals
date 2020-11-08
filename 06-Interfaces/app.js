"use strict";
let wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion",
    regenerar(x) {
        console.log("Se regenero " + x);
    }
};
function enviarMision(xmen) {
    console.warn("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}
enviarMision(wolverine);
enviarCuartel(wolverine);
class Mutante {
    constructor() {
        this.nombre = "";
        this.poder = "";
        this.esBueno = true; //Satisface las necesidades
    }
    regenerar(nombreX) {
        console.log("Hola" + nombreX);
    }
}
let phoenix = new Mutante();
// phoenix.esBueno = false;
console.log(phoenix.esBueno);
let sumar;
sumar = function (a, b) {
    return a + b;
};
function restar(a, b) {
    return a + b;
}
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
let kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
var Auto = {
    lantas: 4,
    modelo: "Excalibur",
    seguro: true,
};
