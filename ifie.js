// Immediately Invoked Function Expressions (IIFE)  a JavaScript function that runs as soon as it is defined.

(function chai() {
  console.log(`DB Connected`);
})();

// IIFE is used to overcome the pollution of global scope
// Always use semi colon afte IIFE function as it doesn't know the conetxt about when to stop

((name) => {
  console.log(`DB Connected Two, ${name}`);
})("rahul");
