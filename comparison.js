// console.log("2" > 1);
// console.log("02" > 1); // automatically converts string to number
// Always compare variables of same datatype if not done this, it may produce not predictable result
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//The reason is that an equality check == and comparisons > < >= <= works differently
//Comparisons convert null to a number treating it as 0 while equality == doesn't. That's why null >= 0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//Most cases, we avoid these kind of code

//=== used for strict check
console.log("2" === 2);
