// Q.1
/*
console.log('start')

const promise1 = new Promise((resolve, reject) => {
  console.log(1)  // The Promise constructor executes its callback function immediately, synchronously. So, console.log(1) logs "1" to the console
})

console.log('end');
*/

// Q.2

/*
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)  // console.log(1) gets printed because it's part of the synchronous execution of the Promise constructor function when promise1 is created.

  resolve(2)  //  resolves the Promise with a value of 2.
})

promise1.then(res => {
  console.log(res)  // when the Promise is resolved with the value of 2, the 'then' callback is triggered, logging the resolved value (2) to the console.
})

console.log('end');
*/

// the sequence of execution is maintained, with synchronous code executed first, followed by asynchronous code.

// Q.3
/*
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)  // resolve the value with 2
  console.log(3)
})

promise1.then((res) => {
  console.log(res) // after executing all the synchronous code at the end it execute
})

console.log('end');
*/

// Q.4
/*
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

promise1.then(res => {
  console.log(2)  // This sets up a callback to be executed when the promise is resolved. Since the resolve function is not called in the Promise constructor, the promise never resolves, and therefore the then callback is never triggered.
})

console.log('end');
*/

// Q.5

console.log("start"); // 1

const fn = () =>
  new Promise((resolve, reject) => {
    // it defines the fn function, but it doesn't execute it yet.
    console.log(1); // 3
    resolve("success"); // resolved the value with 'success'
  });

console.log("middle"); // 2

fn().then((res) => {
  // fun() gets invoked
  console.log(res); // 5
});

console.log("end"); // 4

// the sequence of execution is maintained, with synchronous code executed first, followed by asynchronous code.
