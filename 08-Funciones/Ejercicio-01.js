"use strict";
// Funciones Básicas
function sumar2(a, b) {
    return a + b;
}
console.log(sumar2(5, 5));
let contar = function (heroes) {
    return heroes.length;
};
let superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(contar(superHeroes));
//Parametros por defecto
function llamarBatman2(llamar) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
    if (!llamar) {
        console.log("Probando");
    }
}
llamarBatman2(true);
// Rest?
function unirheroes(...personas) {
    return personas.join(", ");
}
let heroes = unirheroes("Batman", "Superman", "Flash");
let heroes2 = ["Batman", "Superman", "Flash"];
let heroes3 = ["Batman", "Superman", "Flash"];
for (let index = 0; index < heroes3.length; index++) {
    unirheroes(heroes3[index]);
}
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) {
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
