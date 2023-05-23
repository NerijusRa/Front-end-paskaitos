// kintamojo sukurimas
//1. Iniciavimo zodelis (var, let, const)
//2. Kintamojo pavadinimas
//3. lygybes zenklas =
//4. kintamojo verte (kam kintamasis lygus)
//5. typeof parodo kokio tipo duomenys tai yra.

var vardas = "John"; //String (tekstas) duomenu tipas. (dedam i kabutes)

let pavarde = "Doe"; //String (tekstas) duomenu tipas. (dedam i kabutes)

let miestas = "Kaunas"; //String (tekstas) duomenu tipas. (dedam i kabutes)

let yraStudentas = true; //Boolean (true/false) duomenu tipas. Pavadinimas be tarpu ar bruksniu, bet gali but apatinis bruksnys. Naudojam kaip parasyta dabar. Jokiu simboliu. Skaicius galima naudot, tik ne nuo ju pradet.

let amzius = 25; //Number (skaicius) duomenu tipas (be kabuciu gali but)

const asmensKodas = 34903050053; //Number (skaicius) duomenu tipas (be kabuciu gali but)

console.log(vardas);
//5. typeof parodo kokio tipo duomenys tai yra.
// console.log(typeof vardas);
// console.log(vardas, typeof vardas);

console.log(pavarde);
console.log(miestas);
console.log(amzius);
console.log(yraStudentas);
console.log(asmensKodas);

console.log('Hello, ' + vardas + ' ' + pavarde + ".")

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log(vardas + ' ' + pavarde + ' (amzius ' + amzius + ' m.), ' + 'asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.')

console.log(`${vardas} ${pavarde} (amzius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`)


