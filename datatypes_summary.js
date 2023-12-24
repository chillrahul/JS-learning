// Primitive datatype
// All primitive datatypes of call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreVal = 8.9; //there is noo special float in JS
const isloggedIn = false;
const outsideTemp = null; // typeof: object
let userEmail; //undefied
const id = Symbol("123"); //Symbols give an unique value to an variable
const anotherId = Symbol("123");

console.log(id == anotherId); //false evnthough it appears that both have same value

const bigNumber = 67853421436687665353546789876543n; //bigInt

//Refrence (Non-Primitive)
//Array, Objects, Functions

/* JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. */
const heros = ["shaktiman", "ironman", "captain america"]; //typeof: object
let myObj = {
  name: "hitesh",
  age: 22,
}; // typeof: object
const myfunction = function () {
  console.log("Hola Mundo");
}; //typeof : function (function object)

console.log(typeof bigNumber);

/* ------------------------------------------------------------------------------------- */

// Stack (Primitive) --> uses copy, Heap (Non-Primitive) --> uses refrence i.e original value
