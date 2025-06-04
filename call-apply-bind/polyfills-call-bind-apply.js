// 1. Polyfills for call methods

let car1 = {
  color: "red",
  company: "BMW",
};
function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Error: myCall is not a function");
  }

  context.fn = this; // Assign the function to the context i.e. in our case purchase car, we have added the purchase car function so that any this keyword inside of this purchase car function will point to the context object i.e. car1
  const result = context.fn(...args); // Call the function with the context and arguments
  delete context.fn; // Clean up the context
  return result; // Return the result of the function call
};
purchaseCar.myCall(car1, "USD", 20000); // red - BMW car for USD 20000

// 2. Polyfills for apply method
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Error: myApply is not a function");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Error: args is not an array");
  }

  context.fn = this;
  const result = context.fn(...args); // ← Fixed this line
  delete context.fn;
  return result;
};

purchaseCar.myApply(car1, ["USD", 20000]);
// Output: I have purchased red - BMW car for USD 20000

// Polyfills for bind method
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs); // Call the function with the context and arguments
  };
};
const newFunction = purchaseCar.myBind(car1, "USD", 20000);
newFunction(); // Output: I have purchased red - BMW car for USD 20000
// You can also call it like this
// newFunction( "USD",20000);
