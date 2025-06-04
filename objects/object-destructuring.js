
// Interview Question

const user={
  name: "Peter",
  field: "developer",
}
const name = "John";
const { name: newName } = user; // destructuring assignment
console.log(newName); // Peter
// : is used to rename the variable name to newName while destructuring the object user

const newUser = {
  name: "John",
  age: 30,

  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};
const {
  fullName: { firstName, lastName },
} = newUser; // destructuring assignment
console.log("first Name", firstName); // John
console.log("last Name", lastName); // Doe

// Interview Question --> 10
console.log(Object.keys(user)); // [ 'name', 'field' ]

// Interview Question --> 11
function getItems(fruitList, favorireFruit, ...args) {
  return [...fruitList, ...args, favorireFruit];
}
console.log(getItems(["apple", "banana"], "orange", "mango", "kiwi"));
// Keep in mind that rest parameter must be the last parameter in the function definition but spread can be define in between.