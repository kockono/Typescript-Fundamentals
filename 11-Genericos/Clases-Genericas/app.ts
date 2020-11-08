
// class Cuadrado<T extends number | string> { // Los Tipos pueden ser numeros o strings
class Cuadrado<T> {

    base:T;
    altura:T;

    constructor(altura:T, base:T) {
            this.base = base;
            this.altura = altura;
    }    

    area():number {
        return +this.base * +this.altura; //Casteo al agregar un simbolo mas al inicio, lo convierte en un numero de strings  o boleanos
    }
}

// let cuadrado = new Cuadrado(10,10);
let cuadrado = new Cuadrado<string | number | boolean>("10", false); //Puede recibir string o boleanos con el casteo

// cuadrado.base = 10;
// cuadrado.altura = 10;
// false = 0
// true = 1
// "10" = 10

console.log( cuadrado.area());