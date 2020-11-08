var avenger5 = {
    nombre5: "Heimsworth",
    clave5: "Thor",
    poder5: "Droga"
};
// let nombre2 = avenger.nombre2;
// let clave = avenger.clave;
// let poder = avenger.poder;
var clave5 = avenger5.clave5, poder5 = avenger5.poder5, nombre5 = avenger5.nombre5;
console.log(avenger);
var arreglo5 = ["Thor", "Hola", "Amigos"];
var heroe = arreglo[0], saludo = arreglo[1], amistad = arreglo[2];
console.log(amistad);
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        resolve();
    }, 1500);
});
promesa.then(function () {
    console.log('Funciono');
}, function () {
    console.error("No funciono");
});
