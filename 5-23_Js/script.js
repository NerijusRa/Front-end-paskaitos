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
console.log(10 === 10); //true
console.log(10 === "10"); //false

console.log(10 < 10); //false
console.log(10 > 10); //false
console.log(10 >= 10); //true (daugiau arba lygu, tas pats su maziau butu)

console.log(10 != 10); //false, nes != reiskia nelygu
console.log(10 !== 10); //false
console.log(10 !== "10"); //true, nes vienas kita paneigia. bbz

console.log(true); //true
console.log(!true); //false
console.log(!false); //true
console.log(!!true); //true, nes priesingybes priesingybe.

// IF, ELSE IF, ELSE

let light = "green";

if (light === "green") {
  console.log("galima eiti");
} else if (light === "yellow") {
  console.log("pasiruosk");
} else if (light === "red") {
  console.log("STOP");
} else {
  console.log("Sugedo  :(");
}

let personAge = 17.5;

if (personAge >= 18) {
  console.log("Pirkti bilieta galima");
} else {
  console.log("Pirkti bilieto negalima");
}

if (personAge < 18) {
  console.log("Pirkti bilieto negalima");
} else {
  console.log("Pirkti bilieta galima");
}

if (personAge > 17) {
  console.log("Pirkti bilieta galima");
} else {
  console.log("Pirkti bilieto negalima");
}

if (personAge <= 17) {
  console.log("Pirkti bilieto negalima");
} else {
  console.log("Pirkti bilieta galima");
}

//------------------------------------

// UŽDUOTIS:

// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:

// 1. 10 ilgis ir 10 plotis.

// 2. 10 ilgis ir 25 plotis.

// 3. 10 ilgis ir 30 plotis.

// 4. 10 ilgis ir 35 plotis.

// 5. 10 ilgis ir 40 plotis.

// 6. 10 ilgis ir 45 plotis.

// 7. 10 ilgis ir 50 plotis.

// 8. 10 ilgis ir 55 plotis.

// 9. 10 ilgis ir 60 plotis.

// 10. 10 ilgis ir 120 plotis.

console.log("perimetras: " + (10 + 10) * 2 + "cm.");
console.log("perimetras: " + (10 + 25) * 2 + "cm.");
console.log("perimetras: " + (10 + 30) * 2 + "cm.");
console.log("perimetras: " + (10 + 35) * 2 + "cm.");
console.log("perimetras: " + (10 + 40) * 2 + "cm.");
console.log("perimetras: " + (10 + 45) * 2 + "cm.");
console.log("perimetras: " + (10 + 50) * 2 + "cm.");
console.log("perimetras: " + (10 + 55) * 2 + "cm.");
console.log("perimetras: " + (10 + 60) * 2 + "cm.");
console.log("perimetras: " + (10 + 120) * 2 + "cm.");


//------------------------------------

// DRY - don't repeat yourself

//FUNKCIJA
//Funkcijos kurimas:
//1. Iniciavimo zodelis (function)
//2. pavadinimas
//3. paprasti skliaustai () - funkcijos argumentai
//4. riestiniai skliaustai {} - funkcijos apibrezimas

function hello() {
  console.log("Hello, John!");
}

//funkcijos iskvietimas:
//1. funkcijos pavadinimas
//2. paprasti skliaustai ()

hello();

function helloWithName(name, surname) {
  console.log(`Hello, ${name} ${surname}`);
}

helloWithName("John", "Doe");
helloWithName("Steve", "Steve");

//------------------------------------

// Užduotis 1:
// 1. Sukurti funkciją, kuri skaičiuotų stačiakampio plotą.
// 2. Funkcija turi priimti tris argumentus (ilgį, plotį ir matavimo vienetą).
// 3. Funkcija turi grąžinti tekstą: „Stačiakampio plotas yra 10 kv. vnt."
// 4. Į konsolę išvesti šios funkcijos rezultatą.

function getRectangleArea(width = 0, length = 0, units = 'vnt') {
  let output = '';

  if (width > 0 && length > 0) { 
    let area = width * length;
    output = `Stačiakampio plotas yra ${area} kv. ${units}.`;
  } else {
    output = 'Neteisingai įvesti duomenys';
  }

  return output;
}

console.log(getRectangleArea(10, 15, 'cm'));
// getRectangleArea(10, 15);
// getRectangleArea(10);
// getRectangleArea();

// Užduotis 2:
// Atlikti tą patį kaip ir pirmoje užduotyje, tačiau apskaičiuoti stačiojo trikampio plotą.
function getTriangleArea(width = 0, length = 0, units = 'vnt') {
  if (width > 0 && length > 0) { 
    let area = width * length / 2;
    let output = `Stačiojo trikampio plotas yra ${area} kv. ${units}.`;
    return output;
  } else {
    return 'Neteisingai įvesti duomenys';
  }
}

console.log(getTriangleArea(15, 10, 'm'));
// getTriangleArea(15, 10);
// getTriangleArea(15);
// getTriangleArea();
// getTriangleArea(-10, 10);

// Užduotis 3:
// Sukurti naują funkciją, kuri apjungtų šias dvi užduotis ir išvestų abu rezultatus.
function getAllArea(shapeWidth, shapeLength, shapeUnits) {
  // return getRectangleArea(shapeWidth, shapeLength, shapeUnits) + ' ' + getTriangleArea(shapeWidth, shapeLength, shapeUnits);

  let rectangleAreaText = getRectangleArea(shapeWidth, shapeLength, shapeUnits);
  let triangleAreaText = getTriangleArea(shapeWidth, shapeLength, shapeUnits);

  return rectangleAreaText + ' ' + triangleAreaText;
}

console.log('-----------');

console.log(getAllArea(15, 10, 'cm'));
// getAllArea(15, 10);
// getAllArea(15);
// getAllArea();




//------------------------------------


// Sukurti:

// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:

// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.

// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

//PIRMAS BUDAS
// function getDogYears(human, dog, units) {
//   if (human > 0 && dog > 0) {
//     let dogYears = (human * dog);
//     console.log(`${human} žmogaus metai yra ${dogYears} ${units}`);
//   }
// }
// getDogYears(5, 7, "šuns metai.");

//ANTRAS BUDAS
function getDogYears(human) {
    if (human > 0) {
    //     let dogAge = human * 7
    //     console.log(`${human} žmogaus metai yra ${dogAge} šuns metai.`);
    // } else {
    //     return 'Blogai įvestas amžius'
        let dogAge = human * 7;
        let output = `${human} žmogaus metai yra ${dogAge} šuns metai.`;
        return output;
}
}
console.log(getDogYears(5))


//

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:

// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.

// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

//
function booksPerYear(books) {
    if (books > 0) {
        // let averageTime = (books / 10 * 36)
        let averageTime = Math.floor(365 / books);
        console.log(`Norint perskaityti ${books} knygų per metus, vienai knygai perskaityti turėsi ${averageTime} dienas.`)
    }
}
booksPerYear (10)

// 3. Funkciją, kuri konvertuoja dienas į savaites:

// 3.1. Funkcija priima vieną argumentą: dienų skaičių.

// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

//

function daysToWeeks(days) {
    console.log(days)
    let weeks = (days / 7).toFixed(1);
    console.log(weeks)
    let output = `${days} dienos yra ${weeks} savaitės.`
    return output;
}
console.log(daysToWeeks(17))

// 4. Funkciją, kuri konvertuoja dienas į metus:

// 4.1. Funkcija priima vieną argumentą: dienų skaičių.

// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

//

function daysToYears(days) {
    let years = (days / 365).toFixed(2)
    let output = `${days} dienos yra ${years} metai.`
    return output
}
console.log(daysToYears(500))

// 5. Funkciją, kuri konvertuoja metus į valandas:

// 5.1. Funkcija priima vieną argumentą: metų skaičių.

// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

//

function yearsToHours(years) {
    let hours = years * 24 * 365;
    let output = `${years} metai yra ${hours} valandu.`
    return output;
}
console.log(yearsToHours(1))

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:

// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.

// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

//

function monthsToHours(months) {
  let hours = Math.round(months * 30.45 * 24);
  let output = `${months} mėnesių yra ${hours} valandų.`;
  return output;
}

console.log(monthsToHours(2));
// 7. Funkciją, kuri konvertuoja mėnesius į minutes:

// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.

// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes(months) {
    let minutes = Math.round(months * 30.45 * 24 * 60);
    let output = `${months} menesiu yra ${minutes} minuciu.`;
    return output;
}
console.log(monthsToMinutes(2))
// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):

// 8.1. Funkcija priima du argumentus:

//   8.1.1. Dienų skaičių.

//   8.1.2. Formatą. Galimos formato reikšmės yra:

//     8.1.2.1. minutes

//     8.1.2.2. hours

//     8.1.2.3. weeks

//     8.1.2.4. months

//     8.1.2.5. years

// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.
function convertDays(days, format) {
  if (days <= 0) {
    return "Blogai įvestos dienos";
  }

  if (format === "minutes") {
    let minutes = days * 24 * 60;
    return `${days} days - ${minutes} minutes`;
  }

  if (format === "hours") {
    let hours = days * 24;
    return `${days} days - ${hours} hours`;
  }

  if (format === "weeks") {
    let weeks = (days / 7).toFixed(1);
    return `${days} days - ${weeks} weeks`;
  }

  if (format === "months") {
    let months = (days / 30.45).toFixed(1);
    return `${days} days - ${months} months`;
  }

  if (format === "years") {
    let years = (days / 365).toFixed(2);
    return `${days} days - ${years} years`;
  }

  return "Blogai nurodytas formatas";
}

console.log(convertDays(5, "months"));