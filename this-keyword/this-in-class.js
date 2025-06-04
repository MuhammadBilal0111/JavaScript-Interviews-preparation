class User {
  constructor(n) {
    this.name = n;
  }
  getName() {
    return this.name; // this inside method points everything present in the contructor function
  }
}
const user = new User("Bilal"); // creating the object
console.log(user); // prints the object {name: "Bilal"}
console.log(user.getName()); // Bilal
