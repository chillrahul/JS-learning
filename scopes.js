if (true) {
  let a = 10;
  const b = 20;
  var c = 40; //it doesn't follows the scope
}
//console.log(a);
//console.log(b);
//console.log(c);

function one() {
  const username = "rahul";
  function two() {
    const website = "yayati";
    console.log(username);
  }
  // console.log(website);
  two();
}
//one();

/* -------------------------------- Interesting -------------------------------- */
addone(5);

function addone(value) {
  return value + 1;
}

//addTwo(8); // it runs when you call after declaring the function because it is declared by hoisting

const addTwo = function (num) {
  return num + 2;
};
