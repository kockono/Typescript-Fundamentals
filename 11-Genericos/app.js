function regresarGenerico(arg) {
    return arg; //Se tranforma en lo que reciba
}
console.log(regresar(15.457849).toFixed(2));
console.log(regresar("Ricardo Tapia"));
console.log(regresar(new Date()));
function regresar(arg) {
    return arg;
}
console.log(regresar(15.457849).toFixed(2));
console.log(regresar("Ricardo Tapia"));
console.log(regresar(new Date()));
console.log(regresarGenerico(15.457849).toFixed());
console.log(regresarGenerico("Ricardo Tapia"));
console.log(regresarGenerico(new Date()));
