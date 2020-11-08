interface Xmen {
    nombre: string,
    poder?: string //Opcional
    regenerar(nombreReal:string):void;
}

let wolverine: Xmen = {
    nombre: "Wolverine",
    poder: "Regeneracion",
    regenerar(x:string){
        console.log("Se regenero " +x );
    }
};

function enviarMision(xmen: {nombre:string, poder?:string}) {
    console.warn("Enviando a: "+xmen.nombre);
}

function enviarCuartel(xmen: Xmen ) {
    console.log("Enviando a: "+xmen.nombre);
    xmen.regenerar("Logan");
}

enviarMision(wolverine)

enviarCuartel(wolverine)

class Mutante implements Xmen {

    nombre:string = "";
    poder:string = "";
    esBueno:boolean = true; //Satisface las necesidades
    regenerar(nombreX: string ){
        console.log("Hola" + nombreX);
    }

}

let phoenix = new Mutante();
// phoenix.esBueno = false;

console.log(phoenix.esBueno);

//* Interfaces Con Funciones

interface DosNumeroFunc {
    ( num1:number, num2:number ) : number
}

let sumarDosNumeros:DosNumeroFunc;

sumarDosNumeros = function(a:number, b:number) {
    return a + b;
}

function restar(a:number, b:number) {
    return a + b;
}

interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}


let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 


//* Herencia En Interfaces
interface Carro {
    lantas:number;
    modelo:string;
}

interface Volvo extends Carro {
    seguro:boolean;
}

var Auto:Volvo = {
    lantas: 4,
    modelo: "Excalibur",
    seguro: true,
}