// kintamojo sukurimas
//1. Iniciavimo zodelis (var, let, const)
//2. Kintamojo pavadinimas
//3. lygybes zenklas =
//4. kintamojo verte (kam kintamasis lygus)
//5. typeof parodo konsolej kokio tipo duomenys tai yra.

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

console.log("Hello, " + vardas + " " + pavarde + ".");

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log(
  vardas +
    " " +
    pavarde +
    " (amzius " +
    amzius +
    " m.), " +
    "asmens kodas: " +
    asmensKodas +
    ", gyvenamasis miestas: " +
    miestas +
    "."
);

console.log(
  `${vardas} ${pavarde} (amzius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`
);

// John said: "Good morning".

console.log(`John said: "Good Morning".`);
console.log('John said: "Good Morning".');

console.log(`That's my car.`);
console.log("That's my car.");

console.log(`John said: "that's my car".`);
console.log("John `said`: " + `"That's my car".`);
console.log('John said: "That\'s my car".');

// John `said`: "That's \my\ car".

console.log("John `said`: " + `"That's \\my\\ car".`);

// John \`said\`: "That's my car".

console.log('John \\`said\\`: "That\'s my car".');

// salygos
//dviguba lygybe (loosely equal ==) tikrina tik reiksmes ir nekreipia demesio i duomenu tipa
console.log(10 == 10); //true
console.log(10 == "10"); //true
//triguba lygybe (strictly equal ===) pirmoiausia tikrina ar sutampa duomenu tipai, o tada tikrina reiksmes.
console.log(10 === 10)//true
console.log(10 === '10')//false

console.log(10 < 10)//false
console.log(10 > 10)//false
console.log(10 >= 10)//true (daugiau arba lygu, tas pats su maziau butu)

console.log(10 != 10) //false, nes != reiskia nelygu
console.log(10 !== 10)//false
console.log(10 !== '10')//true, nes vienas kita paneigia. bbz

console.log(true)//true
console.log(!true)//false
console.log(!false)//true
console.log(!!true)//true, nes priesingybes priesingybe. 

// IF, ELSE IF, ELSE

let light = 'green'

if (light === 'green') {
    console.log('galima eiti')
}
else if (light === 'yellow') {
    console.log('pasiruosk')
}
else if (light === 'red') {
    console.log('STOP')
} else { console.log('Sugedo  :(') }


let personAge = 17.5

if (personAge >= 18) {
    console.log('Pirkti bilieta galima')
} else {
    console.log('Pirkti bilieto negalima')
}

if (personAge < 18) {
    console.log('Pirkti bilieto negalima')
} else {
    console.log('Pirkti bilieta galima')
}

if (personAge > 17) {
    console.log('Pirkti bilieta galima')
} else {
    console.log('Pirkti bilieto negalima')
}

if (personAge <= 17) {
    console.log('Pirkti bilieto negalima')
} else {
    console.log('Pirkti bilieta galima')
}

