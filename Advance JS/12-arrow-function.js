'use strick';

// normal function
var getA = function(a) {
  return a;
};
console.log(getA(10));


// arrow function : in single statement we don't need {} braces
let getA = a => a;
console.log(getA(1));

// in arrow function whenever we use return we need to use {}
let square = (a) => {return a * a};
console.log(square(2));


let multi = (a, b) => {
  return a * b;
};

console.log(multi(2, 4));


// Q.1
var fun = a => a;
var a = 10;
console.log(fun(a))


// Q.2
var fun = a => a;
console.log(fun(a));
var a = 10;  
// var fun = a => a;
// This line declares a variable fun and assigns it a value of a function
// output: undefined 


// Q.3
var fun = a => {a};
var a = 10;
console.log(fun(a)); // undefined
// In JavaScript, when you use curly braces {} in an arrow function, you need to explicitly use the return keyword to return a value from the function


// Q.4
var fun = (a, b) => {
  var sum = a + b
  return sum;
}

var a = 10;
var b = 20;
console.log(fun(a, b))


// Q.5
// var fun = (a, b) =>
// var sum = a + b
// return sum;

// var a = 10;
// var b = 20;
// console.log(fun(a, b))  // error


// Q.6 Main problem solved by fat arrow function
var student = function(name) {
  this.name = name;
  function printName() {
    console.log(this.name) // undefined
  }

  printName()
}

var samim = new student('samim');
/*
In JavaScript, when you use a regular function declaration like function printName() {...}, the this keyword inside that function refers to the global object (window in browsers, global in Node.js) or undefined in strict mode. Therefore, this.name inside the printName function will not refer to the name property of the student object.
To fix this issue, you can use arrow functions, which do not have their own this context and instead inherit it from the surrounding lexical scope
*/

// Q.7
var student = function(name) {
  this.name = name;
  var printName = () => {
    console.log(this.name)
  }

  printName()
}

var samim = new student('samim');
/*
With arrow functions, this inside printName will refer to the this value of the student constructor, which is the newly created object samim. Therefore, this.name will correctly log 'samim' to the console.
*/


// this.name = 'arrow function refers to the closest this'
let me = {
  name: "Samim",
  thinInArrow: () => {
    console.log(`My name is ${this.name}`); // this refers to the global object so, this won't work here and give undefined
  },
  thinInRegular() {
    console.log(`My name is ${this.name}`); // this work here this refers to the me object
  },
};

me.thinInArrow();
me.thinInRegular();


// Example 




const user = {
  name: "Kartik",
  age: 25,
  regularFun() {
    console.log(`My name is ${this.name}`); // this refers to the user object
  },
  printUserDetails() {
    // function findName() {
    //   console.log(`My name is ${this.name}`); // undefined
    // }

    // To fix this issue, you can use arrow functions, which do not have their own this binding and instead inherit this from the enclosing lexical context:

    const findName = () => {
      console.log(`My name is ${this.name}`);
    };

    // function printAge() {
    //   console.log(`My age is ${this.age}`); // undefined
    // }

    const printAge = () => {
      console.log(`My age is ${this.age}`);
    };

    // By using arrow functions for findName and printAge, this inside these functions will refer to the user object, and you'll get the expected output.

    findName();
    printAge();
  },
};

user.regularFun();
user.printUserDetails();