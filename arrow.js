const user = {
  username: "Rahul",
  price: 89292,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// this --> refers to the current context

// user.welcomeMessage();
// user.username = "Nick";
// user.welcomeMessage();
//console.log(this); // output differs in browsers. it will show Window. In node it is empty {}

//this works in object onle
// function chai() {
//     let username = 'rahul' //output --?undefined
//   console.log(this.username);
// }

// const chai = function () {
//   let username = "rahul"; //output --?undefined
//   console.log(this.username);
// };

const chai = () => {
  let username = "rahul";
  console.log(this.username); // same output
};

//chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//const addTwo = (num1, num2) => num1 + num2; //implicit return
//const addTwo = (num1, num2) => (num1 + num2);
// if you use curly braces then you must  use return

const addTwo = (num1, num2) => ({ username: "rahul" });
console.log(addTwo(98, 34));

const myArray = [7, 8, 9, 6, 2];

// myArray.forEach(function)
