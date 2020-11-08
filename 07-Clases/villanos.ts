export class Villanos {
        nombre:string;
        poder:string;

    constructor(nombre:string, poder:string) {
        this.nombre = nombre;
        this.poder = poder;
    }

    imprimir(){
        console.log(`${this.nombre},${this.poder}`);
    }
}