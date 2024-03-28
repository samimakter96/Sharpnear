// Q.1

var obj = {
  val: 100,
};

function fun() {
  console.log(this.val);
}

fun(); // there is no relation between obj and fun() that's why it return undefined

// Q.2
var obj = {
  val: 100,
};

function fun() {
  console.log(this.val);
}

obj.fun(); // Error because there is no fun() method inside obj

// Q.3
var obj = {
  val: 100,
};

function fun() {
  console.log(this.val); // now this refer to the object
}

fun.call(obj);

// Q.4
var obj = {
  val: 100,
};

function fun(a) {
  console.log(this.val + a); // 100a Not a Number
}

fun.call(obj); // NAN

// Q.5
var obj = {
  val: 100,
};

function fun(a) {
  console.log(this.val + a);
}

fun.call(obj, 3);

// Q.6

var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(this.val + a + b + c);
}

fun.call(obj, 3, 4, 5);

// Q.7
var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

fun.call(obj, [3, 4, 5]); // The call() method expects the arguments to be passed individually, not as an array.  [3, 4, 5], it's treated as a single argument.

// Q.8

var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(this.val + a + b + c);
}

fun.apply(obj, [3, 4, 5]); // 112  because apply() takes array as argument and passes the elements individually.

// Q.9
var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(this.val + a + b + c);
}

const fun2 = fun.bind(obj);

fun2(1, 2, 3); // When you call fun2(1, 2, 3), it's equivalent to calling fun.call(obj, 1, 2, 3)

// call method
let name = {
  firstName: "Samim",
  lastName: "Akter",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

// Function borrowing
printFullName.call(name, "Delhi", "U.P"); // first argument will always to be the reference to the this variable

let name2 = {
  firstName: "Ankit",
  lastName: "kumar",
};

// call method we pass arguments individually
printFullName.call(name2, "Bangalore", "K.T");

// apply method we pass second argument as a array
printFullName.apply(name2, ["Bangalore", "K.T"]);

// bind method it's gives the copy of the function which we can invoke later.
let printMyName = printFullName.bind(name2, "Bangalore", "K.T");
// console.log(printMyName);
printMyName();
