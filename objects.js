//const tinderUser = new Object(); // singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123bc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);
const regularUser = {
  email: "some@xyz.com",
  fullname: {
    userfullNAme: {
      firstName: "Rahul",
      LastNAme: "Gupta",
    },
  },
};

//console.log(regularUser.fullname.userfullNAme);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 4: "aa", 3: "wb" };
const obj4 = { 6: "o", 9: "op" };
//const obj3 = { obj1, obj2 };
//const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    email: "some@xyz.com",
  },
  {},
  {},
];
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // changes keys into array
// console.log(Object.values(tinderUser)); // return value in array
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));

const course = {
  coursename: "js in hindi",
  price: "1999",
  courseInstructor: "Rahul",
};

const { courseInstructor: instructor } = course; // Destructruing
// console.log(instructor);
console.log(courseInstructor);
