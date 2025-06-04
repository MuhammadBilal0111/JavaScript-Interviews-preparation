// Hoisting in functions

// Global scope
functionName();
function functionName() {
  // Function Scope
  console.log(x); // undefined
  var x = 5;
  console.log("Muhammad Bilal");
}

// Interview q -> 1

var x = 21;
var fun = function () {
  console.log(x); // undefined
  var x = 20;
};
fun();

// Interview q -> 2
// Difference between params and argumets
// params: A variable in a function definition (like a placeholder)
// The actual value you pass to the function

function square(num) {
  console.log(num * num);
}
square(7); // value that we pass -> Argument

// Spread vs Rest Operator
// spread operator used to "spread out" the elements of an array or object.
// spread operator apply on iterables
function multiply1(num1, num2) {
  console.log(num1 * num2); // output: 24
}
var arr = [4, 6];
multiply1(...arr); // spread the arr values and pass to the function

function multiply2(...nums) {
  console.log(nums); // [4, 6]
}
var arr = [4, 6];
multiply2(...arr);

// Rest parameter must be the last parameter so that it take all the remaining arguments
const fn = (a, x, y, ...numbers) => {
  console.log(numbers);
};
fn(1, 2, 3, 4);
