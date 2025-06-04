var obj = {
  name: "Bilal",
  age: 3,
};
function sayHello(age, profession) {
  console.log("Hello", this.name, "age", age, "profession", profession); // now this points to the obj2 object
}
const bindFunc = sayHello.bind(obj); // provides reusable bind function

bindFunc(24, "Software Engineer"); // Hello Bilal age 24 profession Software Engineer

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
console.log(person.getAge.bind(person2)()); // 24

// interview question 1: what is the output of the code
// Bound function
// So calling .bind(null) fixes this as:
// null in strict mode → this will be null.
// null in non-strict mode → this becomes window.

function f1() {
  console.log(this); // window object
}
let user = {
  g: f1.bind(null), // f.bind(null) returns another function
  // function f1 will be pointing to the window object
};
user.g();

// bind chaining
// interview question 2: what is the output of the code
function f2() {
  console.log(this); // window object
}
f2 = f2.bind({ name: "John" }).bind({ name: "Doe" }); // bind chaining
// when a function binds to specific object, it will bind to that particular object only
// bind chaining does not exist in javascript
f2(); // { name: "John" }

// interview question 3: Fix the code

function checkPassword1(success, failed) {
  let password = prompt("Password?", "");
  // sucess() and failed function does not have this.name and this.age therefore apply the bind method
  if (password == "bilal") success();
  else failed();
}
let user1 = {
  name: "bilal",
  age: 3,
  loginSuccessfull() {
    console.log("Hello", this.name, "age", this.age, "login successfull"); // now this points to the obj2 object
  },
  loginFailed() {
    console.log("Hello", this.name, "age", this.age, "login failed"); // now this points to the obj2 object
  },
};
// checkPassword1(user1.loginSuccessfull, user1.loginFailed); // FIX THIS LINE TO WORK PROPERLY
checkPassword1(
  user1.loginSuccessfull.bind(user1),
  user1.loginFailed.bind(user1)
);

// interview question 4: what is the output of the code?
function checkPassword2(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "bilal") ok();
  else fail();
}

let user2 = {
  name: "bilal",
  login(result) {
    console.log(
      "Hello",
      this.name,
      result ? "login successfull" : "Login failed"
    ); // now this points to the obj2 object
  },
};
checkPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false));

// interview question 5: what is the output of the code?
// Explicit binding with Arrow function

var user3 = {
  name: "Bilal",
  age: 9,
  getAgeArrow: () => console.log(this.age), // it takes the context from its parent normal function as it doesnot have any parent normal function then it points to the window object
  getAge: function () {
    console.log(this.age);
  },
};
var user4 = { age: 24 };
user3.getAgeArrow.call(user4); // undefined
// no matter what you have used with arrow function it will give the same result i.e. window object
user3.getAge.call(user4); // 24
