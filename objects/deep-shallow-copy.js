// What is shallow copy and deep copy

// 🟡 Shallow Copy — Definition
// A shallow copy creates a new object or array, but only copies the top-level properties.
// If those properties include nested objects or arrays, the copy will still point to the same nested structures in memory.

const original = {
  name: "Bilal",
  skills: ["JavaScript", "React"],
};

const shallowCopy = { ...original };

shallowCopy.name = "Ali";
shallowCopy.skills.push("Node.js");

console.log(original);
// ➜ { name: "Bilal", skills: ["JavaScript", "React", "Node.js"] }
//                          ↑ mutated!

console.log(shallowCopy);
// ➜ { name: "Ali", skills: ["JavaScript", "React", "Node.js"] }

// 🔵 Deep Copy — Definition
// A deep copy creates a completely independent copy of the original object, including all nested objects or arrays.
// No references are shared between the original and the copy — they are fully separate in memory.
const originalObj = {
  name: "Bilal",
  skills: ["JavaScript", "React"],
};

const deepCopy = JSON.parse(JSON.stringify(originalObj)); // ✅ deep copy

deepCopy.skills.push("Node.js");

console.log(originalObj);
// ➜ { projectsame: "Bilal", skills: ["JavaScript", "React"] }

console.log(deepCopy);
// ➜ { name: "Bilal", skills: ["JavaScript", "React", "Node.js"] }

// Three ways to clone an object in JavaScript
// 1. Using Object.assign()

const projects1 = {
  name: "Project1",
  duration: "3 months",
  task: ["design"],
};
const clonedProjects = Object.assign({}, projects1); // Shallow copy
clonedProjects.name = "Project2";
clonedProjects.task.push("dev");
console.log("clonedProject", clonedProjects);
console.log("original project", projects1);

// output : clonedProject { name: 'Project2', duration: '3 months', task: [ 'design', 'dev' ] }
// original project { name: 'Project1', duration: '3 months', task: [ 'design', 'dev' ] }

// 2. Using Spread Operator
const projects2 = {
  name: "Project2",
  duration: "3 months",
  task: ["dev"],
};
const clonedProjects2 = { ...projects2 }; // Shallow copy
clonedProjects2.name = "Project3";
clonedProjects2.task.push("design");

console.log("clonedProject2", clonedProjects2);
console.log("original project", projects2);
// output clonedProject2 { name: 'Project3', duration: '3 months', task: [ 'dev', 'design' ] }
// original project { name: 'Project2', duration: '3 months', task: [ 'dev', 'design' ] }

// 3. Using JSON.parse(JSON.stringify())
const projects3 = {
  name: "Project3",
  duration: "3 months",
  task: ["design"],
};
const clonedProjects3 = JSON.parse(JSON.stringify(projects3)); // Deep copy
clonedProjects3.name = "Project4";
clonedProjects3.task.push("dev");
console.log("clonedProject3", clonedProjects3);
console.log("original project", projects3);

// output clonedProject3 { name: 'Project4', duration: '3 months', task: [ 'design', 'dev' ] }
// original project { name: 'Project3', duration: '3 months', task: [ 'design' ] }
