// Function Statement aka Function Declaration
a();
function a() {
  console.log("a called");
}

// Function Expression

// Example of a function expression
const multiplyByTwo = function (num) {
  return num * 2;
};

multiplyByTwo(5);

//  Anonymous Function
// function () {

// }

// Named Function Expression
var x = function greeting() {
  console.log("Hello");
};

x();
// greeting() we got a reference error

// First class Function: the ability of function to be used as values and can be pass as arguments as known as first class function
// passing another function inside a function

// function currying

// Q.1
function fun1() {
  console.log("a");

  return () => {
    console.log("b");
  };
}

fun1();

// Q.2

function fun1() {
  var a = 10;
  return () => {
    a = 20;
    console.log(a);
  };
}

fun1()();

// Q.3

function fun1(a) {
  return () => {
    a = a + 20;
    console.log(a);
  };
}

fun1(10)(20);

// Q.4

function fun1(a) {
  return (b) => {
    a = a + b;
    console.log(a);
  };
}

fun1(10)(30);

// Q.5

function fun1(a) {
  const fun2 = (b) => {
    a = a + b;

    console.log(a);
  };
}

fun1(10)(30);
