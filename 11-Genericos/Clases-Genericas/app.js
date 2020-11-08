var Cuadrado = /** @class */ (function () {
    function Cuadrado(altura, base) {
        this.base = base;
        this.altura = altura;
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura; //Casteo al agregar un simbolo mas al inicio, lo convierte en un numero de strings  o boleanos
    };
    return Cuadrado;
}());
// let cuadrado = new Cuadrado(10,10);
var cuadrado = new Cuadrado("10", false); //Puede recibir string o boleanos con el casteo
// cuadrado.base = 10;
// cuadrado.altura = 10;
console.log(cuadrado.area());
