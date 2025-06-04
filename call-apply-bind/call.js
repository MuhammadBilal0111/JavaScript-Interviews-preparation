// what is call?

var obj1 = {
  name: "bilal",
};
function sayHello() {
  console.log("Hello", this.obj1); // this is a global object and this points to window object
}
sayHello(); // Hello undefined

// this points to the window object but to change the behavior of this keyword to point to the specific object we can use call, apply and bind method

// call method is used to call a function with a given this value and arguments provided individually
var obj2 = {
  name: "bilal",
};
function sayHello() {
  console.log("Hello", this.name); // now this keyword points to the obj2 object
}
sayHello.call(obj2); // Hello bilal

// adding arguments to the call method
var obj3 = {
  name: "bilal",
};
function sayHello(age) {
  console.log("Hello", this.name, "age", age); // now this points to the obj2 object
}
sayHello.call(obj3, 45); // Hello bilal

// passing multiple arguments to the call method
var obj4 = {
  name: "bilal",
};
function sayHello(age, profession) {
  console.log("Hello", this.name, "age", age, "profession", profession); // now this points to the obj2 object
}
sayHello.call(obj4, 45, "Software Engineer"); // Hello bilal age 45 profession Software Engineer

// interview question 1: what is the output of the code

var obj5 = {
  name: "bilal",
};
function sayHello(age) {
  return "Hello" + this.name + "age" + age;
}
console.log(sayHello.call(obj5, 45)); // Hello bilal age 45
console.log(sayHello.bind(obj5, 45)()); // Hello bilal age 45

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
console.log(person.getAge.call(person2)); // 24

// interview question 3: what is the output of the code

var status = "pass1";
setTimeout(() => {
  const status = "fail";
  const data = {
    status: "pass2",
    getStatus: function () {
      return this.status;
    },
  };
  console.log(data.getStatus()); // pass2
  console.log(data.getStatus.call(this)); // pass1 because setTimeOut()passing towards the global object
}, 0);

// interview question 3: what is the output of the code
const animals = [
  { species: "dog", name: "King" },
  { species: "cat", name: "Queen" },
];
function printAnimals(i) {
  this.print = function () {
    console.log("#", i, this.species, this.name);
  };
  this.print();
}
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}
