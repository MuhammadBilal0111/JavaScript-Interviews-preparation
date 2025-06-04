// closure is a function that reference a variable from outer scope to inner scope
// Lexical Scope: a variable define outside of a function can be accessible inside of a function
// Purpose of Closure
// 1. Time Optimization
// 2. Data hiding

var username = "bilal"; // global scope
function local() {
  // variables declared with var, let, or const inside a function are not accessible outside of it.
  var username = "usman";
  console.log(username);
}
local();

// interview question: what is the output of this code
function subscribe1() {
  var name = "bilal";
  function display() {
    // closure function
    alert(name); // access the variable in lexical scope
  }
  display(); // output: bilal
}
subscribe1();

// when the function is created the closure will be created and bind itself with the env variable or its lexical scope
// closure make it possible for a function to have private variables
// function have the access to all the scopes outer scope and global scope

// Closure Scope chain
// Every closure has three scope
// 1. Own scope
// 2. Parent scope
// 3. Global scope

var username = "bilal"; // global scope
function myFunction() {
  var name = "Mozilla"; // private variable
  function displayName() {
    console.log(name, username); // closure function
  }
  return displayName; // return the closure function
}
myFunction()(); // create a closure

// interview question 1: what is the output of this code

var e = 10; // global scope
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e; // closure function
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // output: 20

// interview question 2: what is the output of this code
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})(); // output: 1 0

// interview question 3: what is the output of this code

function createBase(x) {
  return function (y) {
    return x + y; // closure function
  };
}

// write a function to do this
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // return 27

// Important Topic
// interview question 4 (Most Important question): what is the output of this code

// block scope and setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // output: 3 3 3
  }, i * 1000);
  // output: 3 3 3 due to var
}
// var is a function scoped variable and settimeOut will run only when the loop is completed
// we have a reference to i variable in memory
// in memory the reference of i is 0
// in memory the reference of i is 1
// in memory the reference of i is 2
// when loop completed the setTimeout will run
// and the js engine prints the updated reference of i which is 3
// so the output is 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // output: 3 3 3
  }, i * 1000);
}
// let is a block scoped variable and JS engine will create a new memory block for each iteration of the loop
// let iteration i=0, i=1, i=2 all have different scope
// visual explanation
{
  let i = 0;
}
{
  let i = 1;
}
{
  let i = 2;
}
// When setTimeout() runs, it references the correct version of i for that iteration.
// when the code is completed for each iteration js engine goes to the block scope and execute the setTimeOut prints the value of i which is 0, 1, 2

for (var i = 0; i < 3; i++) {
  function inner(i) {
    // creating whole memory space for each iteration
    setTimeout(() => {
      console.log(i); // reference to the i (local variable of this function not the variable of for loop i.e. i) variable in memory
    }, i * 1000);
  }
  inner(i);
}

// interview question 5 (how would you use a closure to create a private counter)
function counter() {
  var _counter = 0; // private variable because we are not manipulating it directly, we are using closure to manipulate it
  // closure function
  function add(num) {
    _counter += num;
  }
  function retrieve() {
    return _counter;
  }
  return { add, retrieve };
}
const cnter = counter(); // create a closure
cnter.add(5); // add 5 to the counter
cnter.add(10); // add 10 to the counter
console.log(cnter.retrieve()); // output: 15

// interview question 6 (What is module pattern in JS?)
// module pattern is a design pattern that helps us to create private module in javascript

var Module = (function () {
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: () => {
      console.log("public");
    },
  };
})();
Module.publicMethod();
Module.privateMethod();

// interview question 7
// restrict to change the value of the variable in the function
// use closure, it is the solution
function likeTheVideo() {
  let called = 0;
  return () => {
    if (called > 0) {
      console.log("Already subscribed");
    } else {
      called++;
      console.log("Subscribed to ", called);
    }
  };
}
let isSubscribed = likeTheVideo(); // create a closure
isSubscribed(); // output: Subscribed to  1
// everytime you call the function it will point to the same reference of the called
isSubscribed(); // output: Already subscribed

// Interview Question  8
// Implement caching and memoize function in javascript
function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i < 100000000; i++) {} // simulate heavy computation
  return num1 * num2;
};

// Memoized version
const memoizedClumsyProduct = myMemoize(clumsyProduct);

// First call (should take time)
console.time("First call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First call");

// Second call (should be fast)
console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("Second call");

// Interview Question 9
// behavior of this keyword in functions in strict mode
("use strict");

function greet() {
  console.log(this); // print undefines because we are in strict mode and this is not pointing to the global object
}
greet();

// Interview Question 9
// differene between closures and scope

// Closure: when you define the function within another function then the inner function is the closure, this closure is usually return so you can use the outer variables in the inner function
// scope: region which defines what variables you have access to
// There are two types of scope in JS
// 1. Global Scope
// 2. Local Scope

// but incase of closures
// there are three scopes
// global scope
// outer scope
// local scope
cons;
