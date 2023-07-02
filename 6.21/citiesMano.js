// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:

// 1.1. name - miesto pavadinimas (string)
// 1.2. population - miesto populiacija (number)
// 1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
// 1.4. touristAttractions - lankytinos vietos (array)
// 1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)
let cities = [
  {
    name: "Vilnius",
    population: 600000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Ciliakas",
    isCapital: true,
  },
  {
    name: "Kaunas",
    population: 400000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Cili kaimas",
    isCapital: false,
  },
  {
    name: "Klaipeda",
    population: 300000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Sushi Express",
    isCapital: false,
  },
  {
    name: "Rokiskis",
    population: 100000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Lidl",
    isCapital: false,
  },
  {
    name: "Vilnius",
    population: 600000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Ciliakas",
    isCapital: true,
  },
  {
    name: "Kaunas",
    population: 400000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Cili kaimas",
    isCapital: false,
  },
  {
    name: "Klaipeda",
    population: 300000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Sushi Express",
    isCapital: false,
  },
  {
    name: "Rokiskis",
    population: 100000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Lidl",
    isCapital: false,
  },
  {
    name: "Ryga",
    population: 300000,
    location: {
      continent: "europe",
      country: "Latvija",
    },
    touristAttractions: "Centriukas",
    isCapital: true,
  },
  {
    name: "Palanga",
    population: 150000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Exit",
    isCapital: false,
  },
  {
    name: "Panevezys",
    population: 200000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "kebabine",
    isCapital: false,
  },
  {
    name: "Utena",
    population: 100000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Maxima",
    isCapital: false,
  },
  {
    name: "Rudamina",
    population: 50000,
    location: {
      continent: "europe",
      country: "Lietuva",
    },
    touristAttractions: "Ziedas",
    isCapital: false,
  },
  {
    name: "New York",
    population: 500000,
    location: {
      continent: "North America",
      country: "USA",
    },
    touristAttractions: "Empire state building",
    isCapital: false,
  },
  {
    name: "California",
    population: 500000,
    location: {
      continent: "North America",
      country: "USA",
    },
    touristAttractions: "Dispensary",
    isCapital: false,
  },
  {
    name: "Brooklyn",
    population: 500000,
    location: {
      continent: "North America",
      country: "USA",
    },
    touristAttractions: "Brooklyn Bridge",
    isCapital: false,
  },
];

console.log(cities);

let citiesList = document.querySelector('#cities-list')

cities.forEach((city) => {
  console.log(city);
  console.log(city.name);
  console.log(city.population);
  console.log(city.location);
  console.log(city.location.continent);
  console.log(city.location.country);
  console.log(city.isCapital);
  console.log(city.touristAttractions);

  //HTML

  let cityItem = document.createElement("div");
  cityItem.classList.add("city-item");

  let cityName = document.createElement("h2");
  cityName.textContent = city.name;

  citiesList.append(city);

  citiesList.append(cityItem);
});