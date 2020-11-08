class Avengerr {

    public nombree?:string;
    public nombreReall?:string;

    constructor(nombre:string, nombreReal:string) {
        this.nombree = nombre;
        this.nombreReall = nombreReal;
    }
}



class Xmen extends Avengerr {

    constructor(a:string, b:string) {
        super(a, b)
    }
}