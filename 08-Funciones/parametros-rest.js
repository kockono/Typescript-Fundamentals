"use strict";
function nombreCompleto(nombre, ...losDemasParametros) {
    return nombre + " " + losDemasParametros.join(" ");
}
let superMan = nombreCompleto("Clark", "Joseph", "Kent");
let ironMan = nombreCompleto("Anthony", "Edward", "Stark");
console.log(superMan);
console.log(ironMan);
