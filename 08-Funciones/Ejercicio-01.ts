// Funciones Básicas
function sumar2( a:number, b:number ):number {
    return a + b;
  }
  console.log(sumar2(5,5));
  
  
  
  let contar = function( heroes:string[] ){
    return heroes.length;
  }
  let superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  console.log(contar(superHeroes));
  
  
  //Parametros por defecto
  function llamarBatman2( llamar?:boolean ){
    if( llamar ){
      console.log("Batiseñal activada");
    }if(!llamar){
        console.log("Probando");
    }
  }
  
  llamarBatman2(true);
  
  // Rest?
  function unirheroes( ...personas:string[] ){
    return personas.join(", ");
  }
  
  let heroes = unirheroes("Batman", "Superman", "Flash");
  let heroes2 = ["Batman", "Superman", "Flash"];
  let heroes3:string[] = ["Batman", "Superman", "Flash"];

for (let index = 0; index < heroes3.length; index++) {
    unirheroes(heroes3[index]);
}

  // Tipo funcion
  function noHaceNada( numero?:number, texto?:string, booleano?:boolean, arreglo?:any[] ){
  }
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco : (n:number, t:string, b:boolean, a:number[]) => void;