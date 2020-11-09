//* Decoradores De Fabrica
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

// Los decoradores de clase reciben el constructor de la función
function planVillano(constructor:Function) {

    constructor.prototype.imprimirPLan = function() {
        console.log("El plan de " + this.nombre + " es dominar el mundo!");
    }

}


@planVillano
class Evil {

    constructor(public nombre:string) {
        
    }

}// Cualquier clase podra tener el constructor de planVillano


let lex = new Evil(" Lex Luthor");
(<any>lex).imprimirPLan();
// Es un casteo para que sea de tipo any, hasme caso ts yo se lo que hago



//* Decoradores Anidados
function imprimible(constructor:Function) {
    constructor.prototype.imprimir = function() {
        console.log(this); // Va imprimri el objeto como tal
    }
}

@imprimible
@planVillano
class EvilAnidado {

    constructor(public nombre:string) {
        
    }

}// Cualquier clase podra tener el constructor de planVillano

let spider = new EvilAnidado("Spider Malvado");
(<any>spider).imprimir();

//* Decoradores de metodo
function editable( esEditable:boolean ):Function {

    return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor) { // PropertyDescriptor es si podemos sobrescribir la funcion
        descriptor.writable = esEditable; // Se puede sobrescribir o no se puede sobrescribir

        if( !esEditable ) {
            console.warn("No tengo dinero");
        } 
    }
}

class Libros {

    constructor(public nombre:string) {}

    @editable(true)
    comprar(){
        console.log("Compre Un Libro");
    }

}

let compradorDeLibros = new Libros("Compro Libros")

compradorDeLibros.comprar();