// interview question 1: what is the output of the code
var obj1 = {
  name: "bilal",
};
function sayHello(age, profession) {
  console.log("Hello", this.name, "age", age, "profession", profession); // now this points to the obj2 object
}
sayHello.apply(obj1, [45, "Software Engineer"]); // Hello bilal

// interview question 2: what is the output of the code
const age = 10;
const person = {
  name: "bilal",
  age: 3,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 24 };
console.log(person.getAge()); // 3
console.log(person.getAge.apply(person2)); // 24

// interview question 3: what is the output of the code
// append array in another array using apply
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(arr1.push.apply(arr1, arr2)); // push function points to arr1 array

// interview question 4: how to find min/max in array using apply
const numbers = [1, 2, 3, 4, 5];
// as Math.max function takes multiple arguments and we need to pass an array to it therefore use apply method
const max = Math.max.apply(null, numbers); // Math.max function points to null
const min = Math.min.apply(null, numbers); // Math.min function points to null
console.log(max); // 5
console.log(min); // 1

