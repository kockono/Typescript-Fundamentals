"use strict";
let heroe2 = "Flash";
function imprime_heroe() {
    return heroe2;
}
let activar_batisenal = function () {
    return "Batiseñal Activada";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
function nombreCompleto2(nombre, apellido, capitalizado = false) {
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido); // Capitalizame el nombre y el apellido despues retornamelos
    }
    return nombre + '' + apellido;
}
function capitalizar(palabra) {
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substring(1).toLocaleLowerCase();
}
let nombre = nombreCompleto2("Clark", " Ken", true);
console.log(nombre);
