let originalPassword = "      d!asfgsdgagasgsdgsdgssdghgdj";
let password = originalPassword.trim();
let passwordLength = password.length;

console.log(password);

if (!password.includes('#')) {
  console.log("grotazymes yra privalomos");
} else
    if (symbol === false) {
    console.log('reikalingas simbolis')
}else if (passwordLength < 16) {
  console.log(
    "Slaptazodis per trumpas. Jis privalo buti bent 16 simboliu ilgio"
  );
} else {
  if (passwordLength > 30) {
    console.log("slaptazodis per ilgas");
  } else {
    console.log("slaptazodis geras");
  }
}


let age = 'labas'

if (age < 0) {
  console.log("i mokykla neina");
} else if (age === 6) {
  console.log("gal eina i mokykla");
} else if (age < 11) {
  console.log("pradinukas");
} else if (age >= 11 && age <= 17) {
  console.log("vidurinej");
} else if (age > 17 && age < 20) {
  console.log("abiturientas");
} else if (age >= 20 && age < 120) {
  console.log("seniukas");
} else if (isNaN) {
  console.log("turi buti skaicius");
} else {
  console.log("greiciausiai negyvas");
}

//zaidimas

//PIRMAS LYGIS
//kiek bus 123+456= 579

let correctAnswer1 = 579

//kaip vadinasi arciausiai zemes esanti zvaigzde? sun

let correctAnswer12 = 'sun'

//atsakymai
let playerAnswer1 = 529
let playerAnswer12 = 'moon'

//rezultatai 1 lygio
if (playerAnswer1 === correctAnswer1 && playerAnswer12 === correctAnswer2) {
  console.log("abu atsakymai teisingi. patekai i kita lygi");
} else if (
  playerAnswer1 !== correctAnswer1 &&
  playerAnswer12 === correctAnswer12
) {
  console.log("pirmas neteisingas, bet patekai i kita lygi");
} else if (
  playerAnswer1 === correctAnswer1 &&
  playerAnswer12 !== correctAnswer12
) {
  console.log("antras neteisingas, bet patekai i kita lygi");
} else if (
  playerAnswer1 !== correctAnswer1 &&
  playerAnswer12 !== correctAnswer12
) {
  console.log("abu atsakymai neteisingi, nepatekai i kita lygi");
}

//2 LYGIS // 1 2 3
// + + +
// + + -
// + - +
// - + +
// + - -
// - + -
// - - +
// - - -

let correctAnswer2 = 1
let correctAnswer22 = 1
let correctAnswer23 = 1

let playerAnswer2 = 2
let playerAnswer22 = 2
let playerAnswer23 = 2 

if (
  playerAnswer2 === correctAnswer2 &&
  playerAnswer22 === correctAnswer22 &&
  playerAnswer23 === correctAnswer23
) {
  console.log("visi atsakymai teisingi, pereini i kita lygi.");
} else if (
  playerAnswer2 !== correctAnswer2 &&
  playerAnswer22 === correctAnswer22 &&
  playerAnswer23 === correctAnswer23
) {
  console.log("pirmas atsakymas neteisingas, pereini i kita lygi.");
} else if (
  playerAnswer2 === correctAnswer2 &&
  playerAnswer22 !== correctAnswer22 &&
  playerAnswer23 === correctAnswer23
) {
  console.log("antras atsakymas neteisingas, pereini i kita lygi.");
} else if (
  playerAnswer2 === correctAnswer2 &&
  playerAnswer22 === correctAnswer22 &&
  playerAnswer23 !== correctAnswer23
) {
  console.log("trecias atsakymas neteisingas, pereini i kita lygi.");
} else if (playerAnswer2 !== correctAnswer2 && playerAnswer22 !== correctAnswer22 && playerAnswer23 !== correctAnswer23) {
    console.log('visi atsakymai neteisingi, bandyk dar karta')
}