const name = "Rahul";
const repo = 4;
//console.log(name + repo + " Value");  //not recommended -> outdated

console.log(` Hello my name is ${name} and my repocount is ${repo}`);

const gameName = new String("Temple-Run");
// console.log(gameName); // it is an object, you can use many methods in this way
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toLowerCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf("e"));
const newStringg = gameName.substring(0, 4); //can't use negative value
console.log(newStringg);

const str3 = gameName.slice(-9, 4); //can use negative value
console.log(str3);

const str4 = "     Hey       ";
console.log(str4);
console.log(str4.trim());

const url = "https://rahul.com/rahul%20gupta";
console.log(url.replace("%20", "-"));
console.log(url.includes("rahul"));

console.log(gameName.split("-"));
