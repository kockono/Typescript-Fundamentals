export class Xmen{
    nombreHeroe:string;
    poderHeroe:string;

    constructor(nombre:string,poder:string) {
        this.nombreHeroe = poder;
        this.poderHeroe= nombre;
    }

    imprimir(){
        console.log(`${this.nombreHeroe},${this.poderHeroe}`);
    }

}
 
