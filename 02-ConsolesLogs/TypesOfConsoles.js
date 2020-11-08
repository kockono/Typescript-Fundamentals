"use strict";
const Person = {
    name: "Galo Volador",
    twitter: "Miguel El Gato",
    frontend: true
};
let Hola = "Hola";
console.time(Hola);
console.log("Hola Mundo");
console.info("Hola Info");
console.warn("Hola Warning");
console.error("Hola Error");
console.table(Person);
setTimeout(() => {
    console.timeEnd(Hola);
}, 1500);
