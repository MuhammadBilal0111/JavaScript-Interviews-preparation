// In the case of var redeclaration is possible as much as possible
var a;
var a;
console.log(a); // Output: undefined

// In the case of let redeclaration is not possible in the same scope

// Redeclaration is not possible in same scope
let b;
let b;
console.log(b); // SyntaxError: Identifier 'b' has already been declared

const  c = 9;
const  c = 8;
console.log(b); // SyntaxError: Identifier 'c' has already been declared

// redeclaration is possible
let c;
{
    let c;
}
console.log(c) // undefined

const d;
console.log(d); // SyntaxError: Missing initializer in const declaration

// Declaration without initialization
// we can declare the var and let values without initialization but we cannot initialize const variable it will generate SyntaxError: Missing initializer in const declaration
