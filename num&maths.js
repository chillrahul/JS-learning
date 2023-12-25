const score = 400;
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num1 = 8834.7878;
console.log(num1.toPrecision(4));

const num2 = 1000000;
console.log(num2.toLocaleString());
/* -----------------------MATHS------------------------------- */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.37363));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1);
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
