// Q.1
function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  y();
}

x();

// Q.2
function x() {
  let a = 10;
  function y() {
    return a;
  }
  console.log(y());
}

x();

// Q.3
function x() {
  let a = 10;
  function y() {
    console.log(a); // this a can access parent a = 10 because javaScript has a lexical scope
  }
  return y; //  it just return function y not invoke
}
console.log(x());

// Q.4
function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

const z = x(); // z = y()  because we call x() and store the return function on z
z(); // when we invoke z() actually we invoke y() and it prints 10
console.log(z()); // when we console.log and and invoke together it print 10 and undefined

/*
So, in JavaScript, when we talk about closures, we're talking about a special ability where a function remembers the environment in which it was created.

Let's break it down:

Function: A function is like a set of instructions. It does something when you call it, like adding numbers or showing a message.

Environment: This is like the place where the function is created. It includes all the variables and values that were around when the function was made.

Closure: Now, imagine that function as a special key that not only does its job but also remembers the environment, the place where it was created. So, even if you take that function somewhere else, it still remembers where it came from and can use the variables and values from that place.

To put it simply, closures in JavaScript are like special keys that remember where they were made, so they can use stuff from that place even if they're taken somewhere else. It's a bit like carrying a piece of home with you wherever you go!
*/

function greet(name) {
  // Here, we define a function inside greet
  function sayHello() {
    console.log("Hello, " + name + "!");
  }

  // We return the sayHello function
  return sayHello;
}

// Now, we call greet and store the returned function in greetFunction
var greetFunction = greet("Alice");

// Later, even though greet has finished running, greetFunction still remembers the name
greetFunction(); // This will log: Hello, Alice!

/*
So, even though the greet function has finished running and we might think the name variable should disappear, the sayHello function still remembers name and can use it when we call greetFunction(). That's the magic of closures!
*/
