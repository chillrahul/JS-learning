// singleton --> object.create

//object literals

//synatx of declaring symbol

const mySum = Symbol("key1");

const JsUser = {
  name: "Rahul",
  age: 21,
  [mySum]: "mykey1", //symbol syntax
  "full name": "Rahul Gupta",
  location: "India",
  email: "rahulgupta@123gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySum]); //imp point to remember --> datatype symbol
// console.log(JsUser.mySum); //datatype shows string

// can change object value by = opeartor

JsUser.email = "abc123@yahoo.com";
//Object.freeze(JsUser); // cannot change values in object

JsUser.greeting = function () {
  console.log("Hey there, JS user.");
};
JsUser.greetingtwo = function () {
  console.log(`Hey there, JS user ${this.name}`);
};
console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo);
