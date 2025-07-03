// infinite currying i.e. add(5)(2)...(n) // implement it

// 🔁 What is Infinite Currying?
// Infinite currying is a technique in JavaScript where a function keeps returning another function that takes the next argument — allowing you to pass arguments one by one, indefinitely — until you choose to stop it.

// usually done through recursion

// add(5)(2)(); // implement it
// add(5)(2)(3)();
// add(5)(2)(3)(4)(); // implement it

function add(a) {
  return function (b) {
    if (b) return add(a + b); // base condition
    return a;
  };
}
console.log(add(5)(2)()); // 7
