// function declaration, function definition, function statement
function square1(num) {
  return num * num;
}

// function expression
// when you store the anonymous (function has no name) function inside the variable then it is said to be a function expression
const square2 = function () {
  return num * num;
};
// arrow function
const square3 = (num) => {
  return num * num;
};
// Interview Question -> 1
// What are first class function
// first class function
// function that treat like a variable

// Properties of first class
// 1. They can be assigned to variables.
// 2. They can be passed as arguments to other functions.
// 3. They can be returned from other functions.
// 4. They can be stored in data structures (arrays, objects).

const areaOfRectangle = (l, b) => {
  return l * b;
};
const display = (fn) => {
  console.log("Area is ", fn(2, 5));
};
display(areaOfRectangle);

// Interview Question -> 2

// IIFE (immediately invode function expression)
// normal method
function multiplyByTwo(num) {
  console.log("Multiply by two by normal method", num * 2);
}
multiplyByTwo(5);

// IIFE method
(function multiplyByTwo(num) {
  console.log("Multiply by two by IIFE", num * 2);
})(8);

// Interview Question -> 3
// IIFE (immediately invode function expression)
(function (x) {
  return (function (y) {
    // first find the value of x in this scope and then find the value in the outer scope or the parent scope
    console.log(x); // Output 3
  })(2);
})(3);
// The ability of a function to access variables and functions that are lexically out of its scope are called closure.
// Closures are created whenever the new function is created because that function has the reference to its outer scope.

// Explanation
/*
  (function (x) {
    return (function (y) {
      // first find the value of x in this scope and then find the value in the outer scope or the parent scope
      console.log(x); // Output 3
    })(2);
  })(3);
*/
// in this example when the inner function is created the closure will be created because that function has the access to the outer scope

// Interview Questions -> 4
var num1 = 20,
  num2 = 3,
  name = "Bilal";

(function multiply() {
  console.log(num1 * num2); // Output: 60
})();

// Interview Questions -> 5

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;
  function add() {
    return name + "scored" + (num1 + num2);
  }
  add();
}
getScore();

// Interview Questions -> 6
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Interview Questions -> 7

// Different ways to call a function in JavaScript
// There are several ways to call a function in JavaScript, and each method can affect the value of this inside the function. Here are some common ways to call a function:

// ✅ 1. function() — Regular Function Call
// This is the most common way to call a function.

function greet1() {
  console.log("Hello!");
}

greet1(); // Output: Hello!
// It just calls the function directly.
// this inside the function depends on how the function is called (usually undefined in strict mode or the global object in non-strict mode).

// 2. function.call() — Call with a Custom this Context
function greet2() {
  console.log("Hello, " + this.name);
}
const person = { name: "Ali" };

greet2.call(person); // Output: Hello, Ali
// .call() is a method available on all functions.

// It calls the function but sets the value of this manually.
// First argument of .call() is what this should be inside the function.
// You can also pass arguments after the this value.

function greet3(greeting) {
  console.log(greeting + ", " + this.name);
}

greet3.call(person, "Salam"); // Output: Salam, Ali
