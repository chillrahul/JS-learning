//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.getTime());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

//let myCreateDate = new Date(2023, 0, 23);
//let myCreateDate = new Date(2023, 0, 23, 5, 3);
//let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-14-2023");

//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now() / 1000));

let nayaMahina = new Date();
console.log(nayaMahina);
console.log(nayaMahina.getMonth() + 1);
console.log(nayaMahina.getDay());

console.log(nayaMahina.toLocaleString("default", { weekday: "long" }));
