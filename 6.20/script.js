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
    console.log('for...of ciklas: ' + student)
}