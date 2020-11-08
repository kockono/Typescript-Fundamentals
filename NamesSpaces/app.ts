//Se deben importar antes o de lo contrario no funcionaran
///<reference path ="Validaciones/textos.ts"/>
///<reference path ="Validaciones/fechas.ts"/>

let day = new Date();

if( Validaciones.validarTexto("Barr Allen")) {
    console.log("True");
} else {
    console.log("False");
}


console.log( Validaciones.validarFecha(day));
console.log(Validaciones.validarTexto("Barry Allen"));

//Esto funciona porque ts.config esta definido

//tsc --outFile build/app.js validaciones/fechas.ts validaciones/textos app

// Lo quiero en la carpeta public, quiero que copiles app.js app
//tsc --outFile public/app.js app