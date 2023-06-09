//masyvo kurimas
let students = ["steve", "john", "peter"];
console.log(students);

//masyvo nariu pasiekimas
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

//kaip iteruojame per masyva (ciklas/loop)

//for ciklas
for (let i = 0; i < students.length; i++) {
  console.log("for ciklas: " + students[i]);
}

//map ciklas

students.map((student) => {
  console.log("map ciklas: " + student);
});

//forEach ciklas
students.forEach((student) => {
  console.log("forEach ciklas: " + student);
});

//while ciklas
let n = 0;
while (n < students.length) {
  console.log("while ciklas: " + students[n]);
  n++;
}

// //do while
// let m = 0;
// do {
//   console.log("do while ciklas: " + students[m]);
//   m++;
// } while (m < students.length);

//for ... of ciklas
for (let student of students) {
  console.log("for...of ciklas: " + student);
}

//uzduotis

// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// let company1 = new Object();
let company1 = {};

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1["company name"] = "Company ABC";

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2005;

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 4654654646;

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 20;

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = "John Doe";

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false;

// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ["Lithuania", "Poland"];

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ["Marketing", "B2B Sales"];

// 2.9. Property „contacts", kuris turės:
company1.contacts = {};
//       2.9.1. „phone"
company1.contacts.phone = 37046546544;
//       2.9.2. „email"
company1.contacts.email = "companyabc@email.com";
//       2.9.3. „address", kuris turės:
company1.contacts.address = {};
//           2.9.3.1. „country"
company1.contacts.address.country = "Lithuania";
//           2.9.3.2. „city"
company1.contacts.address.city = "Klaipėda";
//           2.9.3.3. „street"
company1.contacts.address.street = "H. Manto g.";
//           2.9.3.4. „apartment"
company1.contacts.address.apartment = 15;

// 2.10. Property „subsidiary", kurio reikšmė bus naujas objektas.
company1.subsidiaries = [];

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.getFullAddress = function () {
  // let { street, apartment, city, country } = this.contacts.address;

  let street = this.contacts.address.street;
  let apartment = this.contacts.address.apartment;
  let city = this.contacts.address.city;
  let country = this.contacts.address.country;

  return `${street} ${apartment}, ${city}, ${country}.`;
};

console.log(company1.getFullAddress());

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.setNVO = function () {
  this.nvo = true;
  return this.nvo;
};
console.log(company1.nvo);
console.log(company1.setNVO());

//        6.2. Pakeičia NVO statusą į false.
company1.setNonNVO = function () {
  this.nvo = false;
  return this.nvo;
};
console.log(company1.setNonNVO());

//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
company1.switchNVO = function () {
  // if (this.nvo) {
  //   this.nvo = false;
  // } else {
  //   this.nvo = true;
  // }

  this.nvo = !this.nvo;
  return this.nvo;
};

console.log(company1.switchNVO());
console.log(company1.switchNVO());
console.log(company1.switchNVO());

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.getWorkingLocations = function () {
  return "Working locations: " + this.workingLocations.join(", ") + ".";
};

console.log(company1.getWorkingLocations());

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.getActivityAreas = function () {
  return this.activityAreas.join(", ");
};

console.log(company1.getActivityAreas());

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.addWorkingLocation = function (newLocation) {
  this.workingLocations.push(newLocation);
  return this.workingLocations;
};

company1.addWorkingLocation("Germany");
console.log(company1.workingLocations);

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.addActivityArea = function (newArea) {
  this.activityAreas.push(newArea);
  return this.activityAreas;
};

console.log(company1.addActivityArea("Tourism"));

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeWorkingLocation = function (locationToRemove) {
  let updatedWorkingLocations = this.workingLocations.filter((location) => {
    return location !== locationToRemove;
  });

  this.workingLocations = updatedWorkingLocations;
  return this.workingLocations;
};

console.log(company1.removeWorkingLocation("Poland"));

//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityArea = function (areaToRemove) {
  return (this.activityAreas = this.activityAreas.filter(
    (area) => area !== areaToRemove
  ));
};

console.log(company1.removeActivityArea("Tourism"));

// console.log(company1);

let company2 = {
  "company name": "Company XYZ",
  opened: 2003,
  companyCode: 456467841,
  employees: 35,
  ceo: "Doe John",
  nvo: false,
  workingLocations: ["Lithuania", "Poland", "Germany"],
  activityAreas: ["Marketing", "B2C Sales"],
  contacts: {
    phone: 3705467867,
    email: "companyxyz@email.com",
    address: {
      country: "Lithuania",
      city: "Vilnius",
      street: "Vilniaus st.",
      apartment: 17,
    },
  },
  subsidiaries: [company1],
  getFullAddress: function () {
    let street = this.contacts.address.street;
    let apartment = this.contacts.address.apartment;
    let city = this.contacts.address.city;
    let country = this.contacts.address.country;

    return `${street} ${apartment}, ${city}, ${country}.`;
  },
  setNVO: function () {
    this.nvo = true;
    return this.nvo;
  },
  setNonNVO() {
    this.nvo = false;
    return this.nvo;
  },
  switchNVO() {
    this.nvo = !this.nvo;
    return this.nvo;
  },
  getWorkingLocations() {
    return "Working locations: " + this.workingLocations.join(", ") + ".";
  },
  getActivityAreas() {
    return this.activityAreas.join(", ");
  },
  addWorkingLocation(newLocation) {
    this.workingLocations.push(newLocation);
    return this.workingLocations;
  },
  addActivityArea(newArea) {
    this.activityAreas.push(newArea);
    return this.activityAreas;
  },
  removeWorkingLocation(locationToRemove) {
    let updatedWorkingLocations = this.workingLocations.filter((location) => {
      return location !== locationToRemove;
    });

    this.workingLocations = updatedWorkingLocations;

    return this.workingLocations;
  },
  removeActivityArea(areaToRemove) {
    return (this.activityAreas = this.activityAreas.filter(
      (area) => area !== areaToRemove
    ));
  },
};

console.log(company2);

console.log(company2.getFullAddress());










//1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
// let cities = [
//   {
//     name: "Vilnius",
//     population: 600000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Ciliakas",
//     isCapital: true,
//   },
//   {
//     name: "Kaunas",
//     population: 400000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Cili kaimas",
//     isCapital: false,
//   },
//   {
//     name: "Klaipeda",
//     population: 300000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Sushi Express",
//     isCapital: false,
//   },
//   {
//     name: "Rokiskis",
//     population: 100000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Lidl",
//     isCapital: false,
//   },
//   {
//     name: "Vilnius",
//     population: 600000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Ciliakas",
//     isCapital: true,
//   },
//   {
//     name: "Kaunas",
//     population: 400000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Cili kaimas",
//     isCapital: false,
//   },
//   {
//     name: "Klaipeda",
//     population: 300000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Sushi Express",
//     isCapital: false,
//   },
//   {
//     name: "Rokiskis",
//     population: 100000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Lidl",
//     isCapital: false,
//   },
//   {
//     name: "Ryga",
//     population: 300000,
//     location: {
//       continent: "europe",
//       country: "Latvija",
//     },
//     touristAttractions: "Centriukas",
//     isCapital: true,
//   },
//   {
//     name: "Palanga",
//     population: 150000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Exit",
//     isCapital: false,
//   },
//   {
//     name: "Panevezys",
//     population: 200000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "kebabine",
//     isCapital: false,
//   },
//   {
//     name: "Utena",
//     population: 100000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Maxima",
//     isCapital: false,
//   },
//   {
//     name: "Rudamina",
//     population: 50000,
//     location: {
//       continent: "europe",
//       country: "Lietuva",
//     },
//     touristAttractions: "Ziedas",
//     isCapital: false,
//   },
//   {
//     name: "New York",
//     population: 500000,
//     location: {
//       continent: "North America",
//       country: "USA",
//     },
//     touristAttractions: "Empire state building",
//     isCapital: false,
//   },
//   {
//     name: "California",
//     population: 500000,
//     location: {
//       continent: "North America",
//       country: "USA",
//     },
//     touristAttractions: "Dispensary",
//     isCapital: false,
//   },
//   {
//     name: "Brooklyn",
//     population: 500000,
//     location: {
//       continent: "North America",
//       country: "USA",
//     },
//     touristAttractions: "Brooklyn Bridge",
//     isCapital: false,
//   },
// ];

// console.log(cities);

// cities.forEach((city) => {
//   console.log(city);
//   console.log(city.name);
//   console.log(city.population);
//   console.log(city.location);
//   console.log(city.location.continent);
//   console.log(city.location.country);
//   console.log(city.isCapital);
//   console.log(city.touristAttractions);
// });
// 1.1. name - miesto pavadinimas (string)

// 1.2. population - miesto populiacija (number)
// 1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
// 1.4. touristAttractions - lankytinos vietos (array)
// 1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)
