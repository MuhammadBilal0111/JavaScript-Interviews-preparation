// currying - a function take one argument at a time and return a function expecting the next argument
// conversion of function from f(a,b) callable as f(a)(b)
// no. of nested function is equal to arity

// normal function
function f(a, b) {
  console.log("Normal function", a, b);
}
f(3, 4);

// currying function
function f1(a) {
  return function (b) {
    console.log("currying function", a, b);
  };
}
f1(3)(4);

// Question: Why do we use currying?
// To avoid passing the same variable again and again
// To make the code more readable and maintainable

// interview question 1 // implement sum(2)(6)(1)
function sum1(a, b, c) {
  return a + b + c;
}
function sum2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log("Normal sum", sum1(2, 6, 1)); // 9
console.log("Currying sum", sum2(2)(6)(1)); // 9

// interview question 2 // implement sum("sum")(2)(3)

function evaluate(operation) {
  return function (a) {
    return function (b) {
      return operation === "sum"
        ? a + b
        : operation === "sub"
        ? a - b
        : operation === "multiply"
        ? a * b
        : operation === "division"
        ? a / b
        : "Invalid operation";
    };
  };
}
const sum = evaluate("sum"); // initialzie it once
const sub = evaluate("sub");
const mul = evaluate("multiply");
const div = evaluate("division");
console.log("Sum", sum(2)(3)); // 5
console.log("sub", sub(2)(3)); // -1
console.log("mul", mul(2)(3)); // 6
console.log("div", div(2)(3)); // 0.6666666666666666

// Advantages of currying
// initialize the function once i.e. evaluate("sum") and use it multiple times
// avoid passing the same variable again and again i.e. sum(2)(3) instead of sum(2, 3)
// use to manipulate the DOM

// interview question 3
// converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    // curriedFunc(a,b,c)

    if (args.length >= func.length) {
      // because no. of arguments is equal to the number of functions in currying
      return func(...args);
    } else {
      return (...next) => {
        return curriedFunc(...args, ...next);
      };
    }
  };
}
const add = (a, b, c, d) => a + b + c + d;
const totalSum = curry(add);
console.log(totalSum(9)(2)(9)(8)); // 28
