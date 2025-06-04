// Objects are used to store key collections of various data and more complex entities

const user = {
  name: "John",
  age: 30,
  "Like the video": true,
};
// Value of object can be accessed by two ways
// 1.  console.log(user["name"]);
// 2.  console.log(user.name);

// Benefit of using this console.log(user["name"]) is that we can use any string as a key, even if it contains spaces or special characters. For example, we can access the "Like the video" property like this:
// console.log(user["Like the video"]);

delete user["Like the video"]; // delete the property "Like the video"

user.name = "Peter"; // update the value of name property

// To delete a property from an object, use the delete operator
delete user.age; // delete the age property

// To check if a property exists in an object, use the in operator
console.log("name" in user); // true

// How to add Dynamic key value pairs
user.field = "Engineering";
console.log(user); // { name: 'Peter', field: 'Engineering' }

// Computed Properties are used to create dynamic property names in objects.
const course = "JavaScript";
const student = {
  name: "John",
  age: 30,
  [course]: true, // computed property
};
console.log(student); // { name: 'John', age: 30, JavaScript: true }

for (key in student) {
  console.log(key); // name age JavaScript
}
// to access the value of key in an object, use the following syntax:
// student[key]
for (key in student) {
  console.log(student[key]); // name age JavaScript
}
// Interview Question --> 1
const func = (function (a) {
  delete a; // there is a problem delete keyword is only used to delete properties of an object, not local variables or function parameters but does not effect the value of a
  return a;
})(5); // output : 5

// Interview Question --> 2
const obj = { a: "one", b: "two", a: "three" };
// output : { a: 'three', b: 'two' }
// The second property(key : value pair) with the same key "a" overwrites the first one, so the final value of "a" is "three".

// Interview Question --> 3
// Create a function multiplyByTwo(obj) that multiplies all the numeric values in the object by 2 and returns the modified object.

let nums = {
  a: 1,
  b: 2,
  title: "My Nums",
};
function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyByTwo(nums);
console.log(nums); // { a: 2, b: 4, title: 'My Nums' }

// Interview Question --> 4
const a = {};
// we are making object as a key therefore js convert the object into [Object Object]
const b = {
  key: "b",
};
const c = {
  key: "c",
};

a[b] = 123;
a[c] = 456; // a[b] and a[c] are same as a[[Object Object]] and a[[Object Object]] because js convert the object into [Object Object]
console.log(a); // { '[object Object]': 123,'[object Object]': 456 } but the last value will overwrite the first one because both keys are same
console.log(a[b]);
console.log(a[c]);
