// Interview Question --> 1
let person1 = {
  name: "Lydia",
};
const members1 = [person1]; // because we are storing the reference of an object in array 0th index
// members1[0] and person1 both point to: { name: "Lydia" }
person1 = null;

// This does not modify the object itself. It just says:
// "Hey, now person1 points to null instead of the original object."
// But members1[0] still holds the reference to the original object, so it’s untouched.
console.log(members1); // [ { name: 'Lydia' }]

// Interview Question --> 2
let person2 = {
  name: "Lydia",
};
const members2 = [person2]; // because we are storing the reference of an object in array 0th index
person2.name = null; // it will effect the value of name property of object person

console.log(members2); // [ { name: 'null' }]
