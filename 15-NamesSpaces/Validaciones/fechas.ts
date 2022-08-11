namespace Validaciones { 
    
    export function validarFecha(fecha: Date ):boolean {

        if(isNaN( fecha.valueOf() )) { //isNaN Si no es un numero, no es una fecha
            return false;
        } else {
            return true;
        }
    }

}

