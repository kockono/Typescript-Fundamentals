console.log("Hola mundo");
let notSure: any = 4; //Puede ser cualquier objeto o tipo o valor
let isDone: boolean = false;
const color: string= "blue";
let nombrePrueba: string = "Chris";
let apellido: string = "Marquez";
let edad: number = 22;
let hoy: Date =  new Date();
hoy = new Date("2020-01-17");

let texto = `Hola, ${nombrePrueba}${apellido}(${edad})`; //Concatenacion
console.log(texto.toUpperCase());
function getNombre(){
    return "Fernando";
}

let texto2: string = `${getNombre()}`

function activar(quien:String, objeto:String ="Batiseñal", momento?:String){

let message:string;

message = `${quien} activo la batiseñal`;
console.log(quien);
return quien;

}
activar("Gordon");

let miFuncion = (a: string) => a;






console.log(miFuncion("H"));