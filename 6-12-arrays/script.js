// Masyvas / Array
let numsArray = [5, 10, 15, 20];
// Index         0   1   2   3

console.log(numsArray);
console.log(numsArray.length);

// Masyvo narių pasiekimas
// console.log(numsArray[0]);
// console.log(numsArray[1]);
// console.log(numsArray[2]);
// console.log(numsArray[3]);

for (let i = 0; i < numsArray.length; i++) {
  console.log(numsArray[i]);
}

let arr = ["Vienas", "Du", "Trys", "Keturi", 10, true, [1, 2, 3]];
// index      0        1      2        3     4    5       6

console.log(arr);

console.log(arr[0]);
console.log(arr[2]);

arr[2] = 3;
console.log(arr);

console.log(arr[6]);
console.log(arr[6][0]);
console.log(arr[6][1]);
console.log(arr[6][2]);

arr[0] = "Labas";
arr[arr.length] = 100;

console.log(arr);

let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiaulia", "Panevėžys"];
console.log(cities);

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
// console.log(cities.pop());
let lastCity = cities.pop();
console.log(lastCity);

cities.pop();

console.log(cities);

// shift() metodas - pašalina pirmą masyvo narį.
// console.log(cities.shift());
let firstCity = cities.shift();
console.log(firstCity);

cities.shift();

console.log(cities);

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
let count = cities.push("Panevėžys");
console.log(count);

cities.push("Šiauliai", "Palanga", "Mažeikiai");

console.log(cities);

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
let count2 = cities.unshift("Vilnius");
console.log(count2);

cities.unshift("Kaunas", "Jonava");

console.log(cities);

let countries = ["Lithuania", "Latvia", "Poland", "France", "Germany", "Italy"];
// Index              0          1         2          3         4         5
// Slice (+)    0           1         2         3         4          5        6
// Slice (-)   -6          -5        -4        -3        -2         -1

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo

let slicedCountries1 = countries.slice();
console.log(slicedCountries1);

let slicedCountries2 = countries.slice(0);
console.log(slicedCountries2);

let slicedCountries3 = countries.slice(2);
console.log(slicedCountries3);

let slicedCountries4 = countries.slice(2, 4);
console.log(slicedCountries4);

let slicedCountries5 = countries.slice(0, 3);
console.log(slicedCountries5);

let slicedCountries6 = countries.slice(-4);
console.log(slicedCountries6);

let slicedCountries7 = countries.slice(-4, -2);
console.log(slicedCountries7);

let slicedCountries8 = countries.slice(-4, 2);
console.log(slicedCountries8);

let slicedCountries9 = countries.slice(-3, 2);
console.log(slicedCountries9);

let slicedCountries10 = countries.slice(2, -2);
console.log(slicedCountries10);

let slicedCountries11 = countries.slice(-2, -4);
console.log(slicedCountries11);

let slicedCountries12 = countries.slice(4, 2);
console.log(slicedCountries12);

console.log(countries);

// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [1, 2, 3, 4, 5, 6, 7, 10];

console.log(nums);

// let splicedNums = nums.splice(2);
// let splicedNums = nums.splice(0, 1);
// let splicedNums = nums.splice(0, 2);
// let splicedNums = nums.splice(2, 4);
// let splicedNums = nums.splice(2, 1);
// let splicedNums = nums.splice(2, 3);
// let splicedNums = nums.splice(-1);
// let splicedNums = nums.splice(-3, 2);
// let splicedNums = nums.splice(-3, 2, 2);
// let splicedNums = nums.splice(1, 2, 'Labas');
// let splicedNums = nums.splice(2, 1, 2.5);
// let splicedNums = nums.splice(2, 0, 2.5);
let splicedNums = nums.splice(2, 0, 2.5, 2.7, 2.8);

console.log(splicedNums);

console.log(nums);

// Nemodifikuoti originalaus masyvo nuo 1 iki 2.7 užduoties.

// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
let list = [
  "pienas",
  "sviestas",
  "sureliai",
  "mesa",
  "suris",
  "kava",
  "bulves",
];
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
let shoppingList1 = list.slice(0, 2);
console.log(shoppingList1);
// 2. Išimti tris paskutinius pirkinius.
let shoppingList2 = list.slice(0, 4);
console.log(shoppingList2);
// 3. Išimti ketvirtą ir penktą pirkinį.
let shoppingList3 = list.slice(3, -2);
console.log(shoppingList3);
// 4. Išimti antrą ir trečią pirkinį.
let shoppingList4 = list.slice(1, 3);
console.log(shoppingList4);
// 5. Išimti visus, išskyrus pirmą pirkinį.
let shoppingList5 = list.slice(0, -6);
console.log(shoppingList5);

console.log(list);

// Sukurti 10-ties filmų masyvą ir iš jo:
let movies = [
  "filmas1",
  "filmas2",
  "filmas3",
  "filmas4",
  "filmas5",
  "filmas6",
  "filmas7",
  "filmas8",
  "filmas9",
  "filmas10",
];
// 2.1. Išimti pirmus 5 filmus.
let movieList1 = movies.slice(5);
console.log(movieList1);
// 2.2. Išimti 4 paskutinius filmus.
let movieList2 = movies.slice(0, 6);
console.log(movieList2);
// 2.3. Išimti nuo trečio iki septinto filmo.
let movieList3 = movies.slice(3, -3);
console.log(movieList3);
// 2.4. Išimti antrą ir trečią filmą.
let movieList4 = movies.slice(1, 3);
console.log(movieList4);
// 2.5. Išimti visus, išskyrus pirmą filmą.
let movieList5 = movies.slice(0, -9);
console.log(movieList5);
// 2.6. Išimti 5 filmus skaičiuojant nuo trečio.
let movieList6 = movies.slice(3, -2);
console.log(movieList6);
// 2.7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
let movieList7 = movies.slice(-1);
console.log(movieList7);
// 2.8. Vietoje penkto filmo įrašyti du naujus filmus.
// let movieList8 = movies.splice(4, 1, 11, 12);
// console.log(movieList8);
// // 2.9. Pašalinti pirmą filmą.
// // let movieList9 = movies.splice(0,1);
// // console.log(movieList9);
// // 2.10. Įrašyti naują filmą į masyvo pradžią.
// let movieList10 = movies.splice(0, 0, 1);
// console.log(movieList10);

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
let moviesTask111 = movies.slice(1, 4)

// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
let moviesTask112 = movies.slice(-4, -1)

    // 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.

console.log(moviesTask111)
console.log(moviesTask112)
 let moviesTask113 = moviesTask111.concat(moviesTask112).reverse()
console.log(moviesTask113)