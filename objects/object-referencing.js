// Object Referencing
let referenceObj = { greeting: "Hey!" };
let reference = referenceObj; // we are only providing the reference of the object to the variable reference
// reference variale points to { greeting: "Hey!" } object in memory
referenceObj.greeting = "Hello!"; // changing the value of the object using reference variable
console.log(referenceObj.greeting); // Hello!
console.log(reference.greeting); // Hello!

// Interview Question --> 13
// { a: 1 } are different objects in memory, even though they have the same properties and values. In JavaScript, objects are compared by reference, not by value. Therefore, two different objects with the same properties will not be considered equal.
console.log({ a: 1 } == { a: 1 }); // false
// console.log({ b: 1 } === { b: 1 }); // false
// This condition will always return 'false' since JavaScript compares objects by reference, not value
