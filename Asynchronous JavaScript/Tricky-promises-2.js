// Q.1
/*
console.log('start'); // 1

Promise.resolve(1).then((res) => {
  console.log(res) // 3
})

Promise.resolve(2).then((res) => {
  console.log(res) // 4
})

console.log('end');  // 2
*/
// the sequence of execution is maintained, with synchronous code executed first, followed by the asynchronous logging of the resolved values from the Promises.

// Q.2
/*
console.log('start');  // 1

setTimeout(() => {
  console.log('setTimeout') // at the end because setTimeout" will be logged after the other synchronous code execution complete.
})

Promise.resolve().then(() => {  // a promise is created and it immediately resolves. the 'then' method is chained to this Promise, so "resolve" is logged to the console
  console.log('resolve') // 3
})

console.log('end'); // 2
*/
// promise has higher priority than the setTimeout because promise store in the micro task queue and setTimeout store in the macro task queue, so promise gets execute first

// Q.3
/*
const promise = new Promise((resolve, reject) => {
  console.log(1); // first 1 it's a part of synchronous execution of the Promise constructor.
  setTimeout(() => {
    console.log('timerStart'); // 4
    resolve('success'); // This line resolves the Promise with the value 'success'. It's important to note that resolving a Promise does not execute synchronously. It just sets the Promise's state to "fulfilled" with the specified value. 
    console.log('timerEnd')  // 5
  }, 0)
  console.log(2); // second 2 ' it's also a part of synchronous execution of the Promise constructor.
})

promise.then((res) => { //  This sets up a callback to be executed when the Promise is resolved. Since the Promise is resolved asynchronously (inside the setTimeout callback), this callback function will also execute asynchronously, after the current synchronous code finishes.
  console.log(res); // 6
});


console.log(4);  // third 4 it's also a part of synchronous execution of the Promise constructor.
*/

// Q.4

/*
const timer1 = setTimeout(() => {

  console.log('timer1');

  const promise1 = Promise.resolve().then(() => {

    console.log('promise1')
  })

}, 0)

const timer2 = setTimeout(() => {
  console.log('timer2')

}, 0)
*/

/*
order of execution:

Initially, both setTimeout callbacks are scheduled with a delay of 0 milliseconds, but they are not executed immediately.

timer1: The first setTimeout callback is executed, logging "timer1" to the console.

promise1: Within the setTimeout callback, a Promise is created using Promise.resolve(). The then method is chained to this Promise, and when the Promise resolves (which happens immediately), it logs "promise1" to the console. However, since the Promise resolution happens asynchronously, this then callback will be executed in the next iteration of the event loop.

timer2: The second setTimeout callback is executed, logging "timer2" to the console.

So, the overall execution order is  "timer1", "promise1", and then "timer2". "
*/

// Q.5
console.log('start');

const promise1 = Promise.resolve().then(() => {

  console.log('promise1');

  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)

});

const timer1 = setTimeout(() => {

  console.log('timer1')

  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');

/*
order of execution:
Synchronous code like console.log('start');, const promise1 = ..., const timer1 = ..., and console.log('end'); are executed first because they are part of the main script and not inside any asynchronous callbacks.

The promises and setTimeout callbacks are then executed asynchronously, after the synchronous code finishes executing.
*/
