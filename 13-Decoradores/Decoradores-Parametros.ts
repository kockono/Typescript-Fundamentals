function parametro( target:any, metodo:string, index:number ) {
    console.log(target, metodo, index);
}

class Pizza {

    constructor( public nombre:string ) { }
    // Parametro es el nombre de mi funcion decoradora
    imprimir( plan:boolean,@parametro mensaje:string ): void { // Como no llamamos a un factory no ocupamos parentsis
        if( plan ) {
            console.log("El plan es" + mensaje);
        } else {
            console.log(mensaje);
        }
    }
}

let pizzero = new Pizza("Hare una rica pizza")