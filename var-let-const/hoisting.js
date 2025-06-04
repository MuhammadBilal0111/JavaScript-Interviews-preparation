// Hoisting
// During the creation phase  JS engine move the variables and the function declaration to the top of your code and this is known as hoisting

// There are two types of phase
// 1. Creation phase
// 2. Execution phase

// 1. Creation phase
//   i) creates a global window object.
//   ii) setup the memory heap for storing variables and function reference, i.e. takes all the variables and functions and store it inside of this window.
//   iii) initialize those functions and variables declarion with undefined. for function declaration it takes the whole complete function from here and stores it inside the window object

// 2. Execution phase:
//   JS engine execute the code line by line and assigning the values and execute the function
//   for new function JS engine creates a new execution context

// call stack:
// JS keep the track of functions call

// var is hoisted
console.log(count); // undefined
var count = 1;

// let hoisted in temporal dead zone
console.log(count); // ReferenceError: Cannot access 'count' before initialization i.e. this helps us to overcome the limitation of var because var doesnot warn us about the declaration
let count = 1;

// temporal Dead Zone:
// time between the declarations and the initialization of let and const variable

// var is hosted but let and const are hoisted in temporal dead zone

// interview question -> 1
(function abc1() {
  console.log(a);
  var a = 10; // A IS HOISTED
  console.log(a);
})()(
  // Output:
  // undefined
  // 10

  // interview question -> 2

  function abc2() {
    console.log(a, b, c);
    const c = 10; // unseen UNDEFINED
    let b = 1; // unseen UNDEFINED
    var a = 3; // UNDEFINED
  }
)();
// ReferenceError: Cannot access 'b' before initialization

// const and let are not hoisted like var
// let and const are declare in the temporal dead zone
// Temporal Dead Zone is a time span between variable creation and its initialization where they cannot be accessed.

/* Variables in JavaScript Scopes
    Variables declared with **var** are hoisted and initialized with undefined.

    Variables declared with **let** and **const** are also hoisted, but not initialized.

    This uninitialized state creates the TDZ.
*
// Temporal dead zone is the state where variable are "in scope" but not yet initialized

Example:
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 5;
Explanation:

x enters scope at the start of the block (due to hoisting).

But it's in the TDZ until the line let x = 5; is reached.
*/
