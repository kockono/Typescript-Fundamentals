function sePuedeEditar(esEditable:boolean):Function {

    return function ( target:any, nombrePropiedad:string, descriptor:PropertyDescriptor) {
            descriptor.writable = esEditable;
    }

}

function editablePropiedad(esEditable:boolean):Function {

    return function ( target:any, nombrePropiedad:string) {

        let descriptor:PropertyDescriptor = {
            writable:esEditable
        }

        return descriptor;

    }

}


class Pintor {

    @editablePropiedad(false)
    public nombreClass:string; // La propiedad es solo de lectura

    constructor(nombre:string) {
            this.nombreClass = nombre;
    }

    @sePuedeEditar(false)
    plan(){
        console.log("Pintar El Mundo!");
    }

}

let pintor = new Pintor("Dali");

console.log(pintor);