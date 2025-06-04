// Interview Question
// this keyword
const shape = {
  radius: 5,
  diameter() {
    return this.radius * 2; // this refers to the shape object
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius; // this refers to the window object
  },
};
console.log(shape.diameter()); // 10
console.log(shape.perimeter()); // NAN

function print() {
  console.log(this); // undefined in strict mode but window object in non strict mode
}
print();
