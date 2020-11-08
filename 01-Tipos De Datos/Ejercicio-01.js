"use strict";
// Tipos
var batmanE = "bruce";
var superman = "Clark";
var existe = true;
// Tuplas
var parejaHeroes = [batmanE, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
// Enumeraciones
var fuerzas;
(function (fuerzas) {
    fuerzas[fuerzas["fuerzaFlash"] = 5] = "fuerzaFlash";
    fuerzas[fuerzas["fuerzaSuperman"] = 50] = "fuerzaSuperman";
    fuerzas[fuerzas["fuerzaBatman"] = 1] = "fuerzaBatman";
    fuerzas[fuerzas["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
})(fuerzas || (fuerzas = {}));
// Retorno De FUnciones
function activar_batiseñal() {
    return true;
}
function pedir_ayuda() {
    console.log("Ayuda");
}
// Aserciones de tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
