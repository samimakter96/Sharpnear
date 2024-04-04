// Q.1

var number1 = 2;
var number2 = 5;

function multiply(a, b) {
  var answer = a * b;
  return answer;
}

var res = multiply(number1, number2);
// console.log(res);

// console.log(answer); // Error: answer is not defined

// Q.2
/*
var a = 3;
var c = 3;

function b() {
  var x = 3;
  var c = 5; // This 'c' is a local variable inside function b, it doesn't affect the global 'c'
  console.log(c); // Prints the local variable 'c' within function b, which is 5
}

console.log(a); // Prints the global variable 'a', which is 3
console.log(this.a); // 'this' in the global scope refers to the global object (window in a browser), so this.a is equivalent to window.a, which is 3
console.log(this.c); // 'this' in the global scope refers to the global object (window in a browser), so this.c is equivalent to window.c, which is 3

console.log(this.x); // since x is not defined in the global scope or as a property of the global object, this.x will return undefined.

console.log(window.a);
console.log(window.x); // undefined this === window

console.log(b()); // Calls function b(), prints 5 (the value of local variable 'c' inside b()), then prints undefined (implicit return value of function b())



// Q.3

function abc() {
  console.log(a);
}

var a = 11;
abc();

// Q.4
function abcd() {
  console.log(b);
}

abcd();
var b = 11;

*/

// Q. 4

// function x() {
//   let a = 13;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();


// Q.5
// function x() {
//   let a = 13;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// console.log(x())  // return function y()


// Q.6

function x() {
  let a = 13;
  function y() {
    console.log(a);
  }
  a = 5;
  return y;
}

const z = x();
console.log(z());