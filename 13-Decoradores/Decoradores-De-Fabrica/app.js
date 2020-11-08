var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
// @consola
// class VillanosDeVillanos {
//     nombre:string
//     constructor( nombre:string) {
//         this.nombre = nombre;
//     }
// }
var VillanosDeVillanos = /** @class */ (function () {
    function VillanosDeVillanos(nombre) {
        this.nombre = nombre;
    }
    VillanosDeVillanos = __decorate([
        consola
    ], VillanosDeVillanos);
    return VillanosDeVillanos;
}());
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola; //Es el decorador en este caso de clase
    }
    else {
        return function () { };
        // return function () {};
    }
}
