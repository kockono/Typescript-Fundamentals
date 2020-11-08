abstract class Mutantes { // Las clases abstractan sirven como molde para ser heredadas a clases hijas solo se pueden heredar mas no usar a no ser que la heredes

    constructor(public nombre:string, public nombreReal:string) {
       
    }
}

class Xmens extends Mutantes{


}

let Scarlet = new Xmens("Wolverine", "Logan");

console.log(Scarlet);