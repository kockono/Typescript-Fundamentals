function sumar (a:number, b:number):number {
    return a + b;
}

function saludar(nombre:string):string {
    return "Im" + nombre;
}

function salvarVida(): void {
    console.log("El mundo esta salvado!");
}

let miFuncion;

miFuncion=10;

miFuncion = sumar;
miFuncion(5,5);

miFuncion = salvarVida;
miFuncion();

miFuncion = saludar;
miFuncion("Batman")