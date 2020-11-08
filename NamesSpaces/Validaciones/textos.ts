namespace Validaciones {

    export function validarTexto(texto:string): boolean {

        if(texto.length > 3) {
            return true;
        } else {
            return false;
        }
    
    }

}

