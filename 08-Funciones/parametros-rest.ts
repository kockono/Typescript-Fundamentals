function nombreCompleto(nombre:string, ...losDemasParametros:string[]):string {
    return nombre + " " + losDemasParametros.join(" ");
}

let superMan:string = nombreCompleto("Clark", "Joseph", "Kent");
let ironMan:string = nombreCompleto("Anthony", "Edward", "Stark");

console.log(superMan);
console.log(ironMan);