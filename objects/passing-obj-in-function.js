const values = { number: 10 };
const multiply = (x = { ...values }) => {
  // due to the spread operator we are creating a new object every time we call the function i.e. simply cloning the object
  console.log((x.number *= 2));
};
multiply();
multiply();
multiply(values); // we are passing the reference of the object values to the function multiply
multiply(values);

// Interview Question
function changeAgeAndReference(person) {
  person.age = 25;
  person = { name: "John", age: 30 }; // we are reassigning not effect the reference obj
  return person;
}
const personObj1 = { name: "Alex", age: 20 };

const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 30 }

/*
Inside the function:

person.age = 25; modifies the original object that personObj1 points to. So now, personObj1.age is updated to 25.

Then person = { name: "John", age: 30 }; creates a new object and assigns it to the local variable person. This does not affect the original personObj1 because now person points to a new object.
*/
