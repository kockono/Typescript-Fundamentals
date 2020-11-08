let avenger5 = {
    nombre5:"Heimsworth",
    clave5: "Thor",
    poder5: "Droga"
}

// let nombre2 = avenger.nombre2;
// let clave = avenger.clave;
// let poder = avenger.poder;

let {clave5, poder5, nombre5} = avenger5;
console.log(avenger);

let arreglo5:string [] = ["Thor","Hola","Amigos"];

let[heroe,saludo,amistad]=arreglo;

console.log(amistad);

let promesa = new Promise(function(resolve:any, reject:any):any{
    setTimeout(() => {
        console.log("Promesa terminada")
        resolve();
    }, 1500)
})

promesa.then( function(){
    console.log('Funciono');
},
function(){
    console.error("No funciono");
}
)
