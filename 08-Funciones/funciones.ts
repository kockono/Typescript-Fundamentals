let heroe2: string = "Flash";

function imprime_heroe():string {

    return heroe2;
}

let activar_batisenal = function():string {
    return "Batiseñal Activada";
}

console.log(imprime_heroe());
console.log(activar_batisenal());

function nombreCompleto2(nombre: string, apellido:string, capitalizado:boolean = false):string {
    if(capitalizado){
        return capitalizar(nombre) + " " + capitalizar(apellido); // Capitalizame el nombre y el apellido despues retornamelos
    }
    return nombre + '' + apellido;
}

function capitalizar(palabra:string):string {
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substring(1).toLocaleLowerCase();
}


let nombre = nombreCompleto2("Clark"," Ken", true);

console.log(nombre);