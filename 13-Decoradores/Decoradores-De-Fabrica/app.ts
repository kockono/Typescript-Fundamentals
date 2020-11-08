function consola( constructor:Function ) {
    console.log(constructor);
}

// @consola
// class VillanosDeVillanos {

//     nombre:string

//     constructor( nombre:string) {
//         this.nombre = nombre;
//     }
// }

// Decorador de consola
// @consola
@imprimirConsola(true)
class VillanosDeVillanos {


    constructor( public nombre:string) {

    }
}

// Decorador Factory
function imprimirConsola(imprimir:boolean):Function {

    if(imprimir) {
        return consola; //Es el decorador en este caso de clase
    } else {
        return () => {};
        // return function () {};
    }
}



