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

let vardas = 'Nerijus'

if (vardas.length ===  6) {
    console.log('geras vardas')
} else {
    console.log('ilgas vardas')
}

if (vardas.length > 6) {
    console.log('ilgas vardas')
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
}
else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  console.log("BMW Group");
}
else {
  console.log("Nei vienam");
}

