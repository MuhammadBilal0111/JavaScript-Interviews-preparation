// Interview Question
// Spread operator

const obj1 = { name: "bill", age: 22, skills: ["js", "react"] };
const admin = { admin: true, ...obj1 };
console.log(admin); // { admin: true, name: 'bill', age: 22 }
// ...obj1 means add the properties of obj1 to the new object admin
admin.name = "khan"; // it will not effect the value of name property of object obj1
// because we are creating a new object admin using spread operator
admin.skills.push("Nodejs"); // it will effect the value of skills property of object obj1
// because we are using the concept of shallow copying using spread operator
console.log("obj1", obj1);
console.log("admin", admin);

// Interview Question --> 8

const setting = {
  username: "Bilal",
  level: 19,
  health: 90,
};
const data = JSON.stringify(setting, ["level", "health"]); // only stringify the properties level and health
console.log(data);
