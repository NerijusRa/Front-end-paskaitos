//zaidimas (naudojam OUTPUT ir istrinam neteisingus atsakymus is kodo, paliekam tik teisingus. (pirma uzduotis) ARBA susikuriam kintamuosius, kurie nurodo teisingus atsakymus (antra uzduotis))

//PIRMAS LYGIS
//kiek bus 123+456= 579

let correctAnswer1 = 579;

//kaip vadinasi arciausiai zemes esanti zvaigzde? sun

let correctAnswer12 = "sun";

//atsakymai
let playerAnswer1 = 579;
let playerAnswer12 = "sun";

//rezultatai 1 lygio
// if (playerAnswer1 === correctAnswer1 && playerAnswer12 === correctAnswer12) {
//   output = "abu atsakymai teisingi. patekai i kita lygi";
// } else if (
//   playerAnswer12 === correctAnswer12
// ) {
//   output = "pirmas neteisingas, bet patekai i kita lygi";
// } else if (
//   playerAnswer1 === correctAnswer1
// ) {
//   output = "antras neteisingas, bet patekai i kita lygi";
// } else {
//   output = "abu atsakymai neteisingi, nepatekai i kita lygi";
// }
// document.querySelector('h1').textContent = output
// console.log(output)
//2 LYGIS // 1 2 3
// + + +
// + + -
// + - +
// - + +
// + - -
// - + -
// - - +
// - - -

let correctAnswer2 = 1;
let correctAnswer22 = 1;
let correctAnswer23 = 1;

let playerAnswer2 = 1;
let playerAnswer22 = 1;
let playerAnswer23 = 2;

let answer2 = playerAnswer2 === correctAnswer2;
let answer22 = playerAnswer22 === correctAnswer22;
let answer23 = playerAnswer23 === correctAnswer23;

let successMessage = "patekai i kita lygi!";
let failMessage = "nepatekai i kita lygi...";

let output = "";

if (answer2 && answer22 & answer23) {
  output = successMessage + " visi atsakymai teisingi!";
} else if (answer22 && answer23) {
  output = successMessage + " pirmas neteisingas.";
} else if (answer2 && answer23) {
  output = successMessage + " antras atsakymas neteisingas.";
} else if (answer2 && answer22) {
  output = successMessage + " trecias atsakymas neteisingas.";
} else {
  output = "du atsakymai neteisingi, " + failMessage;
}

document.querySelector("h2").textContent = output;
console.log(output);

//BALU UZDUOTIS

// let grade = prompt("enter your grade");
let grade = 4;
// console.log(grade);
// console.log(isNaN(grade));

if (isNaN(grade)) {
  console.log("IF grade: turi buti skaicius");
} else if (grade === 1) {
  console.log("IF grade: labai blogai");
} else if (grade == 2) {
  console.log("IF grade: blogai");
} else if (grade === 3) {
  console.log("IF grade: vidutiniskai");
} else if (grade == 4) {
  console.log("IF grade: gerai");
} else if (grade == 5) {
  console.log("IF grade: puikiai");
} else {
  console.log("IF grade: turi but nuo 1 iki 5");
}

//SWITCH
let streetLight = "ye";

switch (streetLight) {
  case "green":
    console.log("SWITCH streetLight: galima eiti");
    break;
  case "yellow":
    console.log("SWITCH streetLight: pasiruosk");
    break;
  case "red":
    console.log("SWITCH streetLight: STOP");
    break;
  default:
    console.log("SWITCH streetLight: sugedo");
}

//SWITCH UZDUOTIS

let balai = 10;

switch (balai) {
  case 1:
  case 2:
  case 3:
    console.log("SWITCH balai: blogai");
    break;
  case 4:
  case 5:
  case 6:
    console.log("SWITCH balai: patenkinamai");
    break;
  case 7:
  case 8:
  case 9:
    console.log("SWITCH balai: gerai");
    break;
  case 10:
    console.log("SWITCH balai: puikiai");
    break;
  default:
    console.log("SWITCH balai: netinkamas atsakymas");

    if (isNaN(balai)) {
      console.log("SWITCH balai: turi buti skaicius nuo 1 iki 10");
    }
}

//PASISVEIKINIMAS

let isLoggedIn = true;
let personName = "John. ";
let time = 15;
let isBrithday = false;

let morning = "Good morning, ";
let afterNoon = "Good afternoon, ";
let evening = "Good evening, ";

let nameText = "";
let ifLoggedIn = personName;
let birthdayText = "";
let birthdayWish = "Happy birthday!";
let other = "Hello";

let greetingOutput = "";

if (isLoggedIn === true && isBrithday === false && time >= 12 && time < 18) {
  output = afterNoon + ifLoggedIn;
} else if (
  isLoggedIn === true &&
  isBrithday === true &&
  time >= 12 &&
  time < 18
) {
  output = afterNoon + ifLoggedIn + birthdayWish;
} else if (isLoggedIn === false && time >= 6 && time < 12) {
  output = morning;
}

console.log(output);

//2 BUDAS
// if (time >= 5 && time < 13) {
//   if (isLoggedIn && isBrithday) {
//     console.log("Good morning, " + personName + " and have a great birthday!");
//   } else if (isLoggedIn) {
//     console.log("Good morning, " + personName);
//   } else {
//     console.log("Good morning");
//   }
// } else if (time >= 13 && time < 19) {
//   if (isLoggedIn && isBrithday) {
//     console.log(
//       "Good afternoon, " + personName + " and have a great birthday!"
//     );
//   } else if (isLoggedIn) {
//     console.log("Good afternoon, " + personName);
//   } else {
//     console.log("Good afternoon");
//   }
// } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
//   if (isLoggedIn && isBrithday) {
//     console.log("Good evening, " + personName + " and have a great birthday!");
//   } else if (isLoggedIn) {
//     console.log("Good evening, " + personName);
//   } else {
//     console.log("Good evening");
//   }
// } else {
//   if (isLoggedIn && isBrithday) {
//     console.log("Hello, " + personName + " and have a great birthday!");
//   } else if (isLoggedIn) {
//     console.log("Hello, " + personName);
//   } else {
//     console.log("Hello");
//   }
// }

//3 BUDAS
if (time >= 5 && time < 13) {
  greetingOutput = "Good morning";
} else if (time >= 13 && time < 19) {
  greetingOutput = "Good afternoon";
} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
  greetingOutput = "Good evening";
} else {
  greetingOutput = "Hello";
}

if (isLoggedIn && personName) {
  nameText = ", " + personName;
}

if (isLoggedIn && isBrithday) {
  birthdayText = " and have a great birthday!";
}

console.log(greetingOutput + nameText + birthdayText);

//KITA UZDUOTIS

let day = 4;

switch (day) {
  case 4:
    console.log("SAVAITES DIENOS: mazasis penktadienis");
  case 1:
  case 2:
  case 3:
  case 5:
    console.log("SAVAITES DIENOS: darbo diena");
    break;
  case 6:
  case 7:
    console.log("SAVAITES DIENOS: savaitgalis");
    break;
  default:
    console.log("SAVAITES DIENOS: nesamone");
}

//AMZIAUS UZDUOTIS

let age = 14;

switch (age) {
  case 0:
    console.log("ivestas amzius yra per mazas");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("i mokykla dar neina");
    break;
  case 6:
    console.log("i mokykla tikriausiai neina, bet gali buti pradinukas");
    break;
  case 7:
  case 8:
  case 9:
    console.log("pradinukas");
    break;
  case 10:
    console.log("tikriausiai pradinej, bet gali buti ir penktokas");
    break;
  case 11:
  case 12:
  case 13:
    console.log("pagrindine");
    break;
  case 14:
    console.log("tikriausiai mokosi pagrindinej, bet gali buti ir devintokas");
    break;
  case 15:
  case 16:
  case 17:
    console.log("gimnazija");
    break;
  case 18:
    console.log("tikriausiai mokosi gimnazijoje, bet gali buti ir baiges");
    break;
  case 19:
  case 20:
    console.log("mokykla baige, nebent liko antrais ir treciais metais");
    break;
  default:
    console.log("ivestas amzius yra per didelis");
}
