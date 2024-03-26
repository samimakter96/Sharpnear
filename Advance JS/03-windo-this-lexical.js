// Question 1

var a = 2;
var c = 2;

function b() {
  var x = 2;
  var c = 4;
  console.log(c);
}

console.log(a);
console.log(this.a); // this refers to the global object, window in a browser
console.log(this.c);
console.log(this.x); // x is undefined in the global object

console.log(window.a);
console.log(window.x);
console.log(b());

// Q.2

function abc() {
  console.log(a);
}

var a = 10;
abc();

// Q.3

function abc() {
  console.log(a); // a value has not been assigned yet, so when we try to access it gives us undefined
}

abc();

// after the invoking the function a initialize with the value of 7
var a = 7;

// Q.4

function outerFunction() {
  console.log(a);
  var c = 10;

  innerFunction();

  function innerFunction() {
    console.log(b);
    console.log(c);
  }
}

var a = 7;
var b = 3;
outerFunction();

// Q.5

function outerFunction() {
  console.log(a); // undefined (a is present in the local scope that is why it won't check outside)

  var a = 10; // now a become 10

  innerFunction();

  function innerFunction() {
    console.log(a); // 10
    console.log(window.a); // global  7
    console.log(this.a); // window === this  7
  }
}

var a = 7;
var b = 3;
outerFunction();
