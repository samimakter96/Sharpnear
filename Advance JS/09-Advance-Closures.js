// Q.1

function y() {
  setTimeout(() => console.log("a"), 1000); // execute after a delay of 1000 milliseconds
  console.log("Done Coding"); // execute immediately
}

y();

// statement that prints 'Done Coding' to the console. This statement executes synchronously, meaning it runs immediately when encountered.

// Q.2

function y() {
  setTimeout(() => console.log("a"), 0); // execute after a delay of 1 milliseconds.
  console.log("Done Coding"); // execute immediately
}

y();

// Q.3

function y() {
  for (var i = 1; i < 6; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
  console.log("Done Coding");
}

y();

/*
Explanation:
Variable Scope: In JavaScript, variables declared with var have function scope, meaning they are accessible throughout the entire function in which they are declared, including any nested functions.

Closure: When a function is defined within another function and it refers to variables from the outer function, a closure is created. This means the inner function maintains a reference to the outer function's variables, even after the outer function has finished executing.

In the case of your for loop within the y() function:

for (var i = 1; i < 6; i++) {
  setTimeout(() => console.log(i), i * 1000)
}
The setTimeout() function is called inside the loop, and it creates a closure over the variable i. However, because the setTimeout() callbacks (the arrow functions) are executed asynchronously after a certain delay, the loop will have already completed by the time they execute.

By the time any of the setTimeout() callbacks actually run, the loop has finished, and the value of i is 6. Since all the setTimeout() callbacks share the same lexical environment (they're all closures over the same i variable), they all log the current value of i when they execute, which is 6.
*/

// Q. 4
function y() {
  for (let i = 1; i < 6; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
  console.log("Done Coding");
}

y();

/*
Each number is logged after the specified delay, and they represent the values of i at the time each setTimeout() function was called. Since let is used to declare i within the loop, each iteration of the loop has its own lexical environment, ensuring that each arrow function captures the correct value of i.
*/

// Q.5 Can you complete the following function "name" so that it prints as per the comments.

const name = (arr) => {
  let count = 0;
  return () => {
    console.log("Hello" + arr[count]);
    count++;
  };
};

let fun = name(["Ram", "Anupam"]);

fun(); // Print Hello Ram

fun(); //print Hello Anupam
