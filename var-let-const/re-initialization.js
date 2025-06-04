// Re-initialization
var a = 8; // 'var' allows re-initialization and reassignment
a = 7; // Reassigning the value of 'a' to 7
console.log(a); // Output: 7

let b = 9; // 'let' allows reassignment but not re-declaration in the same scope
b = 6; // Reassigning the value of 'b' to 6
console.log(b); // Output: 6

const c = 9; // 'const' does not allow reassignment or re-declaration
c = 8; // Attempting to reassign 'c' will throw a TypeError
console.log(c); // Type Error: Assignment to constant variable
