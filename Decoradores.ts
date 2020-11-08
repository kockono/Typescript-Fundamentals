function Decorar(constructor:Function){
    console.log(constructor);
}

@Decorar
class Decoracion{
    constructor(public nombre:string) {
    }
}