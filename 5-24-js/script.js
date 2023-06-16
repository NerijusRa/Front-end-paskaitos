console.groupCollapsed("JS basics");

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

// const age = 28;
// if (age > 100 || age < 0) {
//   console.log("Invalid age");
// } else if (age < 18) {
//   console.log("Child");
// } else {
//   console.log("Adult");
// }

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

let grade = 7;
switch (grade) {
  case 1:
  case 2:
  case 3:
    console.log("Labai blogai");
    break;
  case 4:
    console.log("Blogai");
    break;
  case 5:
  case 6:
    console.log("Vidutiniskai");
    break;
  case 7:
  case 8:
    console.log("Gerai");
    break;
  case 9:
  case 10:
    console.log("Labai gerai");
    break;
  default:
    console.log("Įveskite skaičių nuo 1 iki 5");
    break;
}

// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning.".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 3.4. Jeigu įrašytas blogas laikas, tai turi pasisveikinti "Hello"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

// PIRMAS BUDAS
// let isLoggedIn = true
// let personName = 'Tom'
// let time = 20
// let isBirthday = true

// if (time >= 5 && time < 13) {
//     if (isLoggedIn && isBirthday) {
//         console.log('Good Morning, ' + personName + ' and have a great birthday!')
//     } else {
//         console.log("Good Morning");
//     }

// } else if (time >= 13 && time < 19) {
//      if (isLoggedIn && isBirthday) {
//        console.log(
//          "Good Afternoon, " + personName + " and have a great birthday!"
//        );
//      } else {
//          console.log("Good Afternoon");
//      }
// } else if (time >= 19 && time < 24 || time >=0 && time <5) {
//    if (isLoggedIn && isBirthday) {
//      console.log(
//        "Good Evening, " + personName + " and have a great birthday!"
//      );
//    } else {
//      console.log("Good Evening");
//    }
// }

// ANTRAS BUDAS
let isLoggedIn = true;
let personName = "Tom";
let time = 20;
let isBirthday = true;

let greetingText = "";
let nameText = "";
let birthdayText = "";

if (time >= 5 && time < 13) {
  greetingText = "Good Morning";
} else if (time >= 13 && time < 19) {
  greetingText = "Good Afternoon";
} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
  greetingText = "Good Evening";
} else {
  greetingText = "Hello";
}

if (isLoggedIn && personName != "") {
  nameText = ", " + personName;
}

if (isBirthday) {
  birthdayText = " and have a great birthday!";
}

console.log(greetingText + nameText + birthdayText);

let day = 1;

switch (day) {
  case 4:
    console.log("Mazasis penktadienis");
  case 1:
  case 2:
  case 3:
  case 5:
    console.log("Darbo diena");
    break;
  case 6:
  case 7:
    console.log("Savaitgalis");
    break;
  default:
    console.log("Neteisingai ivesta diena");
    break;
}
console.groupEnd();

// let age = 18;

// if (age < 0) {
//   console.log("Įvestas amžius yra per mažas. Turi būti teigiamas skaičius.");
// } else if (age < 6) {
//   console.log("Į mokyklą neina");
// } else if (age < 7) {
//   console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
// } else if (age < 10) {
//   console.log("Pradinukas");
// } else if (age < 11) {
//   console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
// } else if (age < 14) {
//   console.log("Pagrindinė");
// } else if (age < 15) {
//   console.log(
//     "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
//   );
// } else if (age < 18) {
//   console.log("Gimnazija");
// } else if (age < 19) {
//   console.log(
//     "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
//   );
// } else {
//   console.log("Įvestas amžius per didelis");
// }

let pAge = 13;
// sustoja kai verte yra true
switch (true) {
  case pAge < 0:
    console.log("Įvestas amžius yra per mažas. Turi būti teigiamas skaičius.");
    break;
  case pAge < 6:
    console.log("Į mokyklą neina");
    break;
  case pAge < 7:
    console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
    break;
  case pAge < 10:
    console.log("Pradinukas");
    break;
  case pAge < 11:
    console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
    break;
  case pAge < 14:
    console.log("Pagrindinė");
    break;
  case pAge < 15:
    console.log(
      "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
    );
    break;
  case pAge < 18:
    console.log("Gimnazija");
    break;
  case pAge < 18:
    console.log("Gimnazija");
    break;
  case pAge < 19:
    console.log(
      "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
    );
    break;
  default:
    console.log("Įvestas amžius per didelis");
}
// Sustoja kai randa tinkama reiksme.
switch (pAge) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Į mokyklą neina");
    break;
  case 6:
    console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Pradinukas");
    break;
  case 10:
    console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
    break;
  case 11:
  case 12:
  case 13:
    console.log("Pagrindinė");
    break;
  case 14:
    console.log(
      "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
    );
    break;
  case 15:
  case 16:
  case 17:
    console.log("Gimnazija");
    break;
  case 18:
    console.log(
      "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
    );
    break;
  case 19:
    console.log("Mokyklą baigė.");
    break;
  default:
    console.log("Arba paliktas daug kartu antrais metais, arba jau studentas");
}

console.groupCollapsed("Pre Loop");

// console.log('- ' + 1 + '!!!');
// console.log('- ' + 2 + '!!!');
// console.log('- ' + 3 + '!!!');
// console.log('- ' + 4 + '!!!');
// console.log('- ' + 5 + '!!!');
// console.log('- ' + 6 + '!!!');
// console.log('- ' + 7 + '!!!');
// console.log('- ' + 8 + '!!!');
// console.log('- ' + 9 + '!!!');
// console.log('- ' + 10 + '!!!');
// console.log('- ' + 11 + '!!!');
// console.log('- ' + 12 + '!!!');
// console.log('- ' + 13 + '!!!');
// console.log('- ' + 14 + '!!!');
// console.log('- ' + 15 + '!!!');
// console.log('- ' + 16 + '!!!');
// console.log('- ' + 17 + '!!!');
// console.log('- ' + 18 + '!!!');
// console.log('- ' + 19 + '!!!');
// console.log('- ' + 20 + '!!!');

let num = 5;
console.log(num);
console.log(num + 1);
console.log(num);

num = 6;
console.log(num);

// Sudėtis
num = num + 1;
console.log(num);

num = num + 2;
console.log(num);

num += 1;
console.log(num);

num += 2;
console.log(num);

num++;
console.log(num);

// Atimtis
num = num - 1;
console.log(num);

num = num - 2;
console.log(num);

num -= 1;
console.log(num);

num -= 2;
console.log(num);

num--;
console.log(num);

// Daugyba
num = num * 2;
console.log(num);

num *= 2;
console.log(num);

// Dalyba
num = num / 2;
console.log(num);

num /= 2;
console.log(num);

// String
let str = "Labas";
console.log(str);

str = str + " vakaras";
console.log(str);

str += ".";
console.log(str);

console.groupEnd();

// FOR CIKLAS (LOOP):
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės pakeitimas
// 3. Riestiniai skliaustai - {}

// for (kintamasis; sąlyga; kintamojo keitimas) {

//   }

for (let i = 1; i <= 20; i++) {
  console.log("-" + i + "!!!");
}

console.groupCollapsed("FizzBuzz");

let ulElement = document.querySelector('ul')

for (let i = 1; i <= 350; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Biff";
  if (i % 9 === 0) output += "Fuzz";
  if (i % 11 === 0) output += "Bizz";
  if (i % 13 === 0) output += "Buff";

  if (!output) output = i;

  let liElement = document.createElement("li");
  liElement.textContent = output;

  ulElement.append(liElement);
}
