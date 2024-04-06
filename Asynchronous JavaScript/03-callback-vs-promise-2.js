function boilWater() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Water boiled')
    }, 2000)
  })
}

function addCoffeePowder() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Added coffee powder')
    }, 500)
  })
}

function brewCoffee() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Brewed coffee')
    }, 1000)
  })
}

function haveCoffee() {
  return new Promise(function(resolve, reject) {
    resolve('Enjoying my coffee')
  }, 3000)
}


boilWater()
  .then(function(result) {
    console.log(result)
    addCoffeePowder()
      .then(function(result) {
        console.log(result)
        brewCoffee()
          .then(function(result) {
            console.log(result)
            haveCoffee()
              .then(function(result) {
                console.log(result)
              })
          })
      })
  })