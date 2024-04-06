// Create a promise
/*
const promise = new Promise((resolve, reject) => {

  setTimeout(function() {
    const bookSearch = Math.random() > 0.5;
    if (bookSearch) {
      resolve('Book found')
    } else {
      reject('Book not found')
    }
  }, 3000)
});

// handle the promise

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })

*/

// Returning promise from a function

function bookSearchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const bookSearch = Math.random() > 0.5;
      if (bookSearch) {
        resolve('Book found')
      } else {
        reject('Book not found')
      }
    }, 3000)
  })
};

bookSearchPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
