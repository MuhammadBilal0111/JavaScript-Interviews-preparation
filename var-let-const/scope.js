// First question that can asked was based on scope

// Scope : Region of a program where a defined variable exists and can be recognized and beyond that it cannot be accessed
// There are 3 types of scopes
// 1. Global Scope
// 2. Block Scope
// 3. Function Scope

// This section is our Global Scope

function name() {
  // This section is the function scope
}

{
  // This section is the block Scope
}

// var is function scope but let and const are block scope
// let and const are basically integrated in the ES6 version of javascript to eliminate all the limitations of var.

{
  var a = 10; // var is functional scope we can access the value of a outside the block
}
console.log(a); // Output is 10

{
  let b = 10; // let and const are the block scope therefore the output is "b is not defined"
}
console.log(b); // b is not defined
