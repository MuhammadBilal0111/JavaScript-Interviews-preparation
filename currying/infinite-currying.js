// infinite currying i.e. add(5)(2)...(n) // implement it

// infinite currying is a technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument
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
