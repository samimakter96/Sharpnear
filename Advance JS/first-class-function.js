/*
In JavaScript, first-class functions are treated as regular variables. This means you can pass them as arguments to other functions, return them from functions, and assign them to variables. 
*/


// Passing functions as arguments: You can pass a function as an argument to another function.


// 1. Passing functions as arguments
function greet(name) {
  return 'Hello ' + name; 
}

function greetUser(greeterFunction, userName) {
  return greeterFunction(userName);
}

console.log(greetUser(greet, 'John'));


// 2. Returning functions from functions
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5));


// 3. Assigning functions to variables
const sayHi = function () {
  console.log('Hi there!');
};

sayHi();