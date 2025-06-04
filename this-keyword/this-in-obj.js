// using function declaration
// interview question 1: what is the output of this code
let user1 = {
  name: "Bilal",
  age: 23,
  getName: function () {
    // this keyword inside method points to the parent object itself
    console.log(this); // {name: "Bilal", age: 23, getName: ƒ}
  },
};
user1.getName();

// interview question 2: what is the output of this code
let user2 = {
  name: "Bilal",
  age: 23,
  childObj: {
    newName: "Ali",
    getName: function () {
      // this function points to the immediate parent object i.e. childObj
      // this inside method points to the immediate parent object
      console.log(this); // {newName: "Ali", getName: ƒ}
    },
  },
};
user2.childObj.getName(); // {newName: "Ali", getName: ƒ}

// using arrow function
// interview question 3: what is the output of this code

let user3 = {
  name: "Bilal",
  age: 23,
  // this keyword inside the arrow function comes from the parent function
  getDetails: () => {
    // this keyword inside arrow function points to the window object
    console.log(this); // window object
  },
};
user3.getDetails(); // window object

// interview question 4: what is the output of this code
let user4 = {
  name: "Bilal",
  age: 23,
  // this inside arrow function take the value from the parent function and parent function take the value from object itself

  getDetails: function () {
    // this keyword inside the arrow function comes from its parent function. If we have the parent function that is the normal function then the arrow function inside take the reference of this from that parent function and parent function take the reference of this from object itself
    const nestedArrow = () => console.log(this); // the value of this will be user
    nestedArrow();
    // if there is no parent function then it will point to the window object
  },
};
user4.getDetails(); // {name: "Bilal", age: 23, getDetails: ƒ}

// interview question 3
// what is the output of this code

const user5 = {
  firstName: "Bilal",

  getName() {
    const firstName = "Ali";
    return this.firstName; // this inside method points to the parent object itself
  },
};
user5.getName(); // Bilal

// interview question 4: what is the output of this code
const user6 = {
  name: "Bilal",
  logMessage() {
    console.log(this); // this keyword is the window object
  },
};
setTimeout(user6.logMessage, 1000);

/* setTimeout is a global function and this inside setTimeout points to the window object itself
 */

/* setTimeOut() uses (user.logMessage) as a callback function rathar than a method therefore (user.logMessage) function copy inside the setTimeOut function therefore this callback has no access to this keyword, therefore it execute independently and print window object
 */

// interview question 5: what is the output of this code
// how to fix it

const user7 = {
  name: "Bilal",
  logMessage() {
    console.log(this); // this keyword is the window object
  },
};
setTimeout(() => {
  user7.logMessage(); // it will invoke as a method of user object
}, 1000);

// interview question 6: what is the output of this code
const user = {
  name: "Bilal",
  logMessage() {
    console.log(this.name); // Bilal
  },
  logMessage1: () => {
    // this inside the arrow function always equal to this of outer scope as there is no parent function it will point to window object
    console.log(this.name); // undefined
  },
};
console.log(user.logMessage()); // Bilal
console.log(user.logMessage1()); // undefined

// interview question 7: what is the output of this code

const calculator = {
  read() {
    this.a = +prompt("Enter a", 0);
    this.b = +prompt("Enter b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum()); // 3
console.log(calculator.mul()); // 6

// interview question 8: what is the output of this code

var length = 10; // global variable include in window object
function callback() {
  // this function points to the global object
  console.log(this.length); // 10
}
const obj1 = {
  length: 6,
  method(fn) {
    // function points to "obj"
    // fn is not pointing to "obj" object, it is pointing to the global object
    fn(); // 10
  },
};
obj1.method(callback); // 10

// interview question 9: what is the output of this code
const obj2 = {
  length: 6,
  method() {
    // [callback,1,7] is also an object
    // when you call the callback it will target to its parent object, therefore array is the parent object and this keyword will point to the array object
    console.log(arguments); // arguments array has the length of 3 property
    arguments[0](); // the length will be the length of array
  },
};
// callback points to parent object and parent object points to the array
obj2.method(callback, 1, 7); // prints 3 which is length of array object

// interview question 10: Implement calc  function of calc.add(10).sub(5).mul(2).div(5)
// CAST 24 interview
const calc = {
  total: 0,
  add(a) {
    this.total += a; // this inside method points to the parent object itself
    return this; // because i want to use multiply or other function to promote chaining
  },
  sub(a) {
    this.total -= a; // this inside method points to the parent object itself
    return this;
  },
  mul(a) {
    this.total *= a; // this inside method points to the parent object itself
    return this;
  },
  div(a) {
    this.total /= a; // this inside method points to the parent object itself
    return this;
  },
};
calc.add(10).sub(5).mul(2).div(5); // 1
