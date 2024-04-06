function loanSanctionPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const loanSanction = Math.random() > 0.5;
      if (loanSanction) {
        resolve('Loan Sanctioned')
      } else {
        reject('Loan not Sanctioned')
      }
    }, 3000)
  })
}

loanSanctionPromise()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
  