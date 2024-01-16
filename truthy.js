const userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

// falsy values

//false, 0, -0, BigInt 0n,"", null, undefined, NaN

// Rest all are truthy values
// eg: "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Obj is empty");
}

// false == 0 --> true
// false == '' -->ture
// 0 =='' --> Ture

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;

//val1 = null ?? 10;
//val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);

// Terniary operator

//condition ? true : false
const teaprice = 100;
teaprice >= 20 ? console.log("greater  than 20") : console.log("more than 100");
