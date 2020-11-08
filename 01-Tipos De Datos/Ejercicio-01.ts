// Tipos
let batmanE:string = "bruce";
let supermanE:string = "Clark";
let existeE:boolean = true;

// Tuplas
let parejaHeroesE:[string, string] = [batmanE, superman];
let villanoE:[string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
let aliadosE:string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

// Enumeraciones
enum fuerzas {
    fuerzaFlash = 5,
    fuerzaSuperman = 50,
    fuerzaBatman = 1,
    fuerzaAcuaman = 0

}

// Retorno De FUnciones
function activar_batiseñal():boolean {
    return true
}

function pedir_ayuda():void {
    console.log("Ayuda");
}

// Aserciones de tipo
let poderE = "100";
let largoDelPoderE = (<string>poder).length
console.log(largoDelPoder);

