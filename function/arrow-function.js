// Interview Question -> 1

// Arrow function vs normal function
// 1. syntax
// 2. implicit return
// 3. arguments keyword
// 4. this keyword

function fullName1(firstName, lastName) {
  return firstName + lastName;
}
fullName1("Muhammad", "Bilal");

// Syntax of arrow function is cleaner
const fullName2 = (firstName, lastName) => firstName + lastName;
fullName2("Muhammad", "Bilal");

function fn() {
  console.log(arguments); // print the arguments value that are passing in the function
}
fn(9, 8, 6, 4);
// but we cannot get the argument implicitly in arrow function it will generate error that arguments not define

// 4 - "this" keyword
let user = {
  username: "Roadside Coder",

  rc1: () => {
    console.log("Subscribe to " + this.username); // this keyword in arrow function points to the global window object
  },

  rc2() {
    console.log("Subscribe to " + this.username); // points to username inside the object
  },
};

user.rc1();
user.rc2();
// in arrow function no this keyword and argument keyword
