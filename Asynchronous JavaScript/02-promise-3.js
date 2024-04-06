function concertPassPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const concertPass = Math.random() > 0.5;
      if (concertPass) {
        resolve('Pass received')
      } else {
        reject('Pass not received')
      }
    }, 3000)
  })
}

concertPassPromise()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })