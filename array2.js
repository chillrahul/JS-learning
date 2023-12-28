const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heroes = ["superman", "falsh", "Batman"];

marvel_heros.push(dc_heroes);
console.log(marvel_heros); // creates a problem here, takes dc_heros array as a data and not merge those two data

console.log(marvel_heros[3][1]);

const allHeroes = marvel_heros.concat(dc_heroes); // merge two arrays and retuen value in new array
console.log(allHeroes);

const allHeroes_new = [...marvel_heros, ...dc_heroes]; // spread operator
//console.log(allHeroes_new);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4.9]]];
const real_anotherArr = anotherArr.flat(Infinity);
//console.log(real_anotherArr);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));
console.log(Array.from({ name: "Rahul" })); // intersting -> returns empty array

let score1 = 100;
let score2 = 600;
let score3 = 500;

console.log(Array.of(score1, score2, score3)); //makes array of different variables
