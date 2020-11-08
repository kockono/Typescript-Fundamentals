let arreglo:number[] = [1,2,3,4,5,6];

let enemigos:string[] = ["Omega Rojo", "Dormamu"];
enemigos.push("Malo");

let enemigos2 = enemigos.toLocaleString().toLowerCase().split(',');

console.log(enemigos2);

let yourArray = ['this', 'iS an', 'arrAy'];
console.log(yourArray); // ["this", "iS an", "arrAy"]

let yourLowerArray = yourArray.toLocaleString().toLowerCase().split(',');
console.log(yourLowerArray); //["this", "is an", "array"]x