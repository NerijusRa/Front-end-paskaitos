console.groupCollapsed("matematika");

let num = 5;
console.log(num);
console.log(num + 1);
console.log(num);

//SUDETIS
num = num + 1;
console.log("num+1: " + num);

num += 1;
console.log("num += 1: " + num);

num += 2;
console.log("num+=2: " + num);

num++;
console.log("num++ : " + num);

//ATIMTIS
num -= 1;
console.log("num-=1 : " + num);

num--;
console.log("num-- : " + num);

//DAUGYBA
num = num * 2;
console.log("num * 2 : " + num);

num *= 2;
console.log("num *= 2 : " + num);

//DALYBA
num = num / 2;
console.log("num / 2 : " + num);

num /= 2;
console.log("num/=2 : " + num);

//STRING (tik sudetis)

let str = "labas";
console.log("string: " + str);

str = str + " vakaras";
console.log("str + : " + str);

console.groupEnd();

//FOR Loop
console.groupCollapsed("for loop");
for (let i = 1; i <= 20; i++) {
  console.log("for ciklas: " + i);
}
console.groupEnd();

console.groupCollapsed("pre loop");

// for (let i = 1; i <= 100; i++) {
//     console.log(i * 2)
// }

// for (let i = 100; i >= 1; i--) {
// console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i * 5);
// }

//pakelia kvadratu

for (let i = 1; i <= 100; i++) {
  let answer = i * i;
  console.log(answer);
}

console.groupEnd();

//WHILE
console.groupCollapsed("while ciklas");

let n = 0;
while (n < 10) {
  console.log(n);
  n++;
}

console.groupEnd();

//DO..WHILE
console.groupCollapsed("do.. while ciklas");

let m = 0;
do {
  console.log(m);
  m++;
} while (m < 10);

console.groupEnd();
//UZDUOTIS

console.groupCollapsed("uzduotis FIZZZBUZZ");

//skaicius kuris dalinasi is 3 buna fizz, dalinasi is 5 buzz, dalinasi ir is 3 ir is 5 = Fizzbuzz

//PIRMAS BUDAS
const ulElement = document.querySelector('ul')

for (let i = 1; i <= 350; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Biff";
  if (i % 9 === 0) output += "Fuzz";
  if (i % 11 === 0) output += "Bizz";
  if (i % 13 === 0) output += "Buff";

  if (!output) output = i;

  console.log(output);
  let liElement = document.createElement("li");
  liElement.textContent = output;
  ulElement.append(liElement)

  liElement.style = `
  color: burlywood;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  background-color: #f0f0f0;`

}

console.groupEnd();

