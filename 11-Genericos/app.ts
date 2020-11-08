

function regresarGenerico<T> ( arg:T ) { //No importa la letra, pero es una regla para los genericos
    return arg  //Se tranforma en lo que reciba
}


console.log( regresar(15.457849).toFixed(2) );
console.log( regresar("Ricardo Tapia") );
console.log( regresar(new Date()) );

function regresar( arg:any ) { 
    return arg  
}

console.log( regresarGenerico(15.457849).toFixed() );
console.log( regresarGenerico("Ricardo Tapia") );
console.log( regresarGenerico(new Date()) );



//Ejemlo de funcion generica en acción
function functionGenerica<T>(arg:T) { //Puede ser cualquier tipo de argumento
    return arg;
}

type Heroee = {
    nombre:string;
    nombreReal:string;
}

type Villano = {
    nombre:string;
    poder:string;
}

let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston",
    poder: "Regeneracion"
}

console.log( functionGenerica<Heroee>(deadpool) ); // Manejalo como un Heroe, Como un Villano, dandole mejor flexibilidad y control

