// Interview Question --> 5
// Difference between JSON.stringify and Json.parse

// JSON.stringify converts a JavaScript object into a JSON string, while JSON.parse converts a JSON string into a JavaScript object.

// In JSON string we cannot access the properties of object using dot notation.

console.log(JSON.stringify(user)); //{"name":"Peter","field":"Engineering"}

const strObj = JSON.stringify(user);
console.log("JSON string", strObj);
console.log("JSON string", strObj.name);

console.log("Javascript object", JSON.parse(strObj));

// // We can store the JSON string in local storage and then retrieve it later.
// localStorage.setItem("user", strObj); // store the JSON string in local storage
// const userStr = localStorage.getItem("user"); // retrieve the JSON string from local storage
// console.log("getting user data from local storage", userStr); // {"name":"Peter","field":"Engineering"}

// if you store the object in local storage then the object convert into [Object Object]

// Interview Question --> 6
console.log([..."Bill"]); // [ 'B', 'i', 'l', 'l' ]
// in this case ...(spread operator) is used to convert the string into array of characters
