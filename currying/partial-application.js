// Partial Application
// Arity refers to the number of arguments or parameters a function accepts.
// Partial application is a functional programming technique where you fix (or pre-fill) , and return a new function that takes the remaining arguments later.
// in other words. Fix some arguments now, pass the rest later.

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = sum(10);
console.log(x(1, 3));

// currying vs partial application
// in sum() function expect three arguments but has two nested functions unlike function function expect three arguments and has three nested function i.e. currying function

// in currying function the number of nested functions depend upon the numbers of arguments in the function

// but in partial functions it is not the case in sum() we are expecting three arguments but only returning 2 nested function.
