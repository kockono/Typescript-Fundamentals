class Abenger {
    private _nombre:string

    constructor(nombre: string){
        this._nombre = nombre;
    }

    get nombre():string{

        return this._nombre;
    }

    set nombre(nombre:string){
        if(nombre.length <= 3){
            throw new Error("El nombre debe tener al menos 4 caracteres");
            // return;
        }
        this._nombre = nombre;
    }
}

let ciclope:Abenger = new Abenger("Chumaya");

console.log(ciclope.nombre);
ciclope.nombre ="Lee";
console.log(ciclope.nombre);