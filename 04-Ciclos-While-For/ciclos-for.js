"use strict";
let avengers = ["Samuel", "Robert", "Paul Bettany"];
let [avenger1, , avenger3] = avengers;
// console.log(avenger1, avenger3);
let thor = {
    nombre: "Thor",
    arma: "Mjlonir",
};
let ironman = {
    nombre: "Ironman",
    arma: "ArmorSuit"
};
let capita = {
    nombre: "Capitan America",
    arma: "Escudo"
};
let avengerss = [thor, ironman, capita];
for (let i = 0; i < avengerss.length; i++) {
    const element = avengerss[i];
    console.log(element.nombre, element.arma);
}
for (let i in avengerss) {
    let avenger = avengerss[i];
    console.log(avenger);
}
for (const avenger of avengerss) {
    console.log(avenger.nombre, avenger.arma);
}
avengerss.forEach(element => {
    console.log(element);
});
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT
// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";
// Declaracion de variables?
const spiderman = "Peter Parker";
const venom2 = "Eddie Brock";
// Destructuracion de arreglos?
const versiones = ["Spider-Man 2099", "Spider-Girl", "Ultimate Spider-Man"];
// const {spiderman2099,   spidergirl,   ultimate} = versiones;
// const spiderman2099 = versiones[0];
// const spidergirl = versiones[1];
// const ultimate = versiones[2];
// Destructuracion de objetos?
const villanos = {
    venom: "Eddie Brock",
    carnage: "Cletus Kasady",
    sandman: "William Baker"
};
const { venom, carnage, sandman } = villanos;
// const venom = villanos.venom;
// const carnage = villanos.carnage;
// const sandman = villanos.sandman;
// Ciclo for Of?
for (let i = 0; i <= versiones.length - 1; i++) {
    const spider = versiones[i];
    console.log(spider);
}
for (const version of versiones) {
    console.log(version);
}
