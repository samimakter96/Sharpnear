//  Q.1
console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
console.log(b);
let a = 5;
var b = 6;
console.log(b);


// Q.2

/*
What is the difference between type error vs syntax error vs reference error. Give Examples of when you can encounter each one of them. 

Type Error: type error occur when we use something that is not intended to be used in that particular way. For example, using a screwdriver to hammer in a nail, instead of using a hammer.

Example: 
const a = 1;
a = 2;
console.log(a)  // TypeError: Assignment to constant variable.

Syntax Error: a syntax error occurs when we write a code that dose not follow the rules of that programming language

Example:
let a = 10
let a = 20;
console.log(a)  // SyntaxError: Identifier 'a' has already been declared

Reference Error: reference error occurs when we are trying to refer to access or use something that does not exits.

let a = 50;
console.log(x)  // ReferenceError: x is not defined

*/

// Q.3
// console.log(a)
// var a = 5;
// console.log(b)  // ReferenceError: b is not defined

// Q.4
// let a = 5;
// var b = 6;

// console.log(this.b);
// console.log(window.b)
// console.log(window.a)
// console.log(this.a)

// Q.5
// let a = 5;
// let a = 6;
// SyntaxError: Identifier 'a' has already been declared

// Q.6

// let a = 6;
// const b
// b = 100;
//SyntaxError: Missing initializer in const declaration

// Q.7 How to iterate an Object
const myObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

for (let key in myObject) {
  console.log(key + ": " + myObject[key]);
}

// Using Object.keys method
const myObject2 = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

Object.keys(myObject2).forEach(key => {
  console.log(key + ": " + myObject[key]);
})