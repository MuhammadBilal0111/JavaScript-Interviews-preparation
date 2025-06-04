// Callback function

// callback function is a function tht passes into another function as an argument, which is then invoked inside the outer function to complete action.

function greeting() {
  // callback function
  console.log("hello");
}
(function display(fn) {
  fn();
})(greeting);

// example: map, filter
