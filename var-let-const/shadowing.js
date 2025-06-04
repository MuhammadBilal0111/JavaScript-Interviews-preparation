// Variable shadowing (overlapping the value of other variable)

/*
  Variable Shadowing in JavaScript
  Variable Shadowing in JavaScript occurs when the inner variable hides or overrides the outer variable within the local scope. In this situation, the outer variable cannot be accessed within the inner scope, only the inner variable is used in that scope.
*/

// Interview Question 1
function test1() {
  let a = "Hello";
  if (true) {
    let a = "Hi"; // This shadows the "a" variable outside the if condition
    console.log(a);
  }
  console.log(a);
}
test1(); /*
Output: Hi
Hello
*/

// Interview Question 2:
function test2() {
  var a = "Hello";
  if (true) {
    var a = "Hi"; // This a shadows the a outside the if condition
    console.log(a);
  }
  console.log(a);
}
test2(); /*
  Output: Hi
  Hi
*/

// Illegal shadowing(we can shadow var variable with let variable but cannot shadow the let variable by var this is called illegl shadowing and it gives the error that variable is already defined
// Example of Illegal shadowing
function test3() {
  var a = "Hello";
  let b = "Bye";
  if (true) {
    let a = "Hi";
    var b = "Goodbye";
    console.log(a);
    console.log(b);
  }
}
test3(); // Output: SyntaxError: Identifier 'b' has already been declared
