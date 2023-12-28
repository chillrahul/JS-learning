// Arrays

const myArray = [0, 1, 2, 3, 4, 5, 9];
const myHeros = ["CAptain America", "Bat Man"];

const arr = new Array(1, 2, 3, 4);
arr.push(9);
arr.push(8);
arr.pop();
arr.unshift(1); // insert element at starting of array
arr.shift(); // deleet firwt elemt
console.log(arr.includes(9));
console.log(arr.indexOf(9));

const newArr = arr.join(); // converts array into string
console.log(newArr);
console.log(typeof newArr);
console.log(arr);

// Slice, Splice

console.log("A ", arr);
const myn1 = arr.slice(1, 3);

console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1, 3); // In splice origianla array gets changed but slice no change in splice happens
console.log("C", arr);

console.log(myn2);
