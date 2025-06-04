// behavior of this keyword in function
function getParams1() {
  // this inside function points to parent object  and the parent object for the function is window object in non strict mode
  console.log(this); // window object in non strict mode but in strict mode it will be undefined
}
getParams1();

// interview question 2
const getParams2 = () => {
  // this inside arrow function points to parent object  and the parent object for the function is window object
  console.log(this); // window object no matter in use strict mode or not
};
getParams2();

// interview question 3: what is the output of this code
function makeUser() {
  return {
    name: "Ali",
    ref: this,
  };
}
let user5 = makeUser(); // when we call the function makeUser what is parent object i.e. window is the parent object, this function points to window object itself
console.log(user5.ref.name); // undefined

// how to fix this issue
function makeUser() {
  return {
    name: "Ali",
    ref() {
      console.log(this); // {name: "Ali", ref: ƒ}
    },
  };
}
let user6 = makeUser();
user6.ref(); // {name: "Ali", ref: ƒ}
