type Heroe = { // Tipo de dato
    nombre:string,
    edad:number,
    poderes:any[],
    getNombre:()=>string
} // Crear lo que estamos buscando en este momento.

let flash: Heroe = {
    nombre: "Barry",
    edad: 24,
    poderes: ["Correr", "Viajar en el tiempo"],
    getNombre(){
        return this.nombre;
    }
}

console.log(flash.poderes[1]);

let robinHood:heroe = {
    nombre: "Robin",
    edad: 19,
    poderes: ["Saltar", "Robar"]
}

interface heroe {
    nombre:string,
    edad:number,
    poderes:any[]
}
interface humano {
    nombre:string,
    edad:number
}
interface nino  extends humano{
    apellido:string,
    altura:number
}

let Alumno:nino = {
    nombre: "Chris",
    apellido: "Cobos",
    altura: 180,
    edad: 20
}

let loqusea: string | number | Heroe = "Chris";