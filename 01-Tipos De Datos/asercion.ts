// Caster puedes tranformar temporalmente un valor a lo que tu quieras

let cualquierValor:any ="Hola"; 

let largoDelString:number = (<string>cualquierValor).length;

console.log(largoDelString);