// let legalAge = 20

// if (legalAge === 20) {
//     console.log('enter')
// }

// if (legalAge <= 20) {
//     console.log('negalima')
// } else {
//     console.log('galima')
// }

const clientAge = 16;
const legalAge = 20;
if (clientAge >= legalAge) {
  console.log(`Pasiekęs ${legalAge}`);
} else {
  console.log(`Nepasiekęs ${legalAge}`);
}

let vardas = "Nerijus";

if (vardas.length === 7) {
  console.log("geras vardas");
} else {
  console.log("ilgas vardas");
}
if (vardas.length > 6) {
  console.log("ilgas vardas");
}

const age = 28;
if (age > 100 || age < 0) {
  console.log("Invalid age");
} else if (age < 18) {
  console.log("Child");
} else {
  console.log("Adult");
}

const car = "BMW";
if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  console.log("VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  console.log("BMW Group");
} else {
  console.log("Nei vienam");
}

let password = "blahblahblahbla";

if (password.length >= 15) {
  console.log("Slaptažodis tinkamas");
}
if (password.length < 16) {
  console.log(
    "Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
  );
}
if (password.length < 20) {
  console.log(
    "Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
  );
}

// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

//

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

//

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// Kiek bus 123 + 456 = 579
let correctAnswer11 = 579;
// Kaip vadinasi arčiausiai Žemės esanti žvaigždė? sun
let correctAnswer12 = "sun";

let playerAnswer11 = 578;
let playerAnswer12 = "un";

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
  console.log(
    "Pirmas teisingas, antras teisingas -     Patekai į kitą lygį. Abu atsakymai teisingi."
  );
} else if (
  correctAnswer11 === playerAnswer11 &&
  correctAnswer12 !== playerAnswer12
) {
  console.log(
    "Pirmas teisingas, antras neteisingas -   Patekai į kitą lygį. Tačiau antras atsakymas buvo neteisingas."
  );
} else if (
  correctAnswer11 !== playerAnswer11 &&
  correctAnswer12 === playerAnswer12
) {
  console.log(
    "Pirmas neteisingas, antras teisingas -   Patekai į kitą lygį. Tačiau pirmas atsakymas buvo neteisingas."
  );
} else if (
  correctAnswer11 !== playerAnswer11 &&
  correctAnswer12 !== playerAnswer12
) {
  console.log(
    "Pirmas neteisingas, antras neteisingas - Nepatekai į kitą lygį. Abu atsakymai buvo neteisingi :("
  );
}

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// TREČIAS LYGIS:
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi būti parodoma, kuris klausimas buvo atsakytas.

// 1 2 3
// + + +
// + + -
// + - +
// - + +
// + - -
// - + -
// - - +
// - - -

// Sukurti vertinimo sistemą, kuri skaitinį vertinimą paverčia į žodžius:
// 1 - Labai blogai
// 2 - Blogai
// 3 - Vidutiniškai
// 4 - Gerai
// 5 - Puikiai
// Vertinimą reikia įvesti per prompt.

// let grade = prompt("Įveskite skaičių nuo 1 iki 5");
// if (isNaN(grade)) {
//   console.log("Galima vesti tik skaičius.");
// } else if (grade == 1) {
//   console.log("Labai blogai");
// } else if (grade == 2) {
//   console.log("Blogai");
// } else if (grade == 3) {
//   console.log("Vidutiniškai");
// } else if (grade == 4) {
//   console.log("Gerai");
// } else if (grade == 5) {
//   console.log("Puikiai");
// } else {
//   console.log("Įvestas neteisingas skaičius");
// }

//SWITCH

let streetLight = "blue";

// if (streetLight === 'green') {
//     console.log('Galima eiti')
// }
// else if (streetLight === 'yellow') {
//     console.log('Pasiruosk')
// }
// else if (streetLight === 'Red') {
//     console.log('STOP!')
// } else {
//     console.log('SUGEDO :(')
// }

switch (streetLight) {
  case "green":
    console.log("Galima eiti");
    break;
  case "yellow":
    console.log("Pasiruosk");
    break;
  case "red":
    console.log("STOP!");
    break;
  default:
    console.log("Sugedo :(");
}
