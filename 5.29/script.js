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
  console.log("turi buti skaicius");
} else if (grade === 1) {
  console.log("labai blogai");
} else if (grade == 2) {
  console.log("blogai");
} else if (grade === 3) {
  console.log("vidutiniskai");
} else if (grade == 4) {
  console.log("gerai");
} else if (grade == 5) {
  console.log("puikiai");
} else {
  console.log("turi but nuo 1 iki 5");
}

//SWITCH
let streetLight = "ye";

switch (streetLight) {
  case "green":
    console.log("galima eiti");
    break;
  case "yellow":
    console.log("pasiruosk");
    break;
  case "red":
    console.log("STOP");
    break;
  default:
    console.log("sugedo");
}
