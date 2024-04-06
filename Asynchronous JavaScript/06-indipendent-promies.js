const projectorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const projectorRanted = Math.random() > 0.5;
    if (projectorRanted) {
      resolve('Projector rented successfully')
    } else {
      reject('Error: Projectors out of stock')
    }
  }, 1000)
})


const pizzaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const pizzaDeliver = Math.random() > 0.5;
    if (pizzaDeliver) {
      resolve('Pizzas delivered at time')
    } else {
      reject('Error: Pizzas not delivered on time')
    }
  }, 2000)
})


const friendPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const friendAvailable = Math.random() > 0.5;
    if (friendAvailable) {
      resolve('Both friends available')
    } else {
      reject('Error: Both friends not available')
    }
  }, 3000)
})


Promise.all([projectorPromise, pizzaPromise, friendPromise])
  .then((results) => {
    results.forEach((result) => {
      console.log(result)
    })
  })
  .catch((error) => {
    console.log(error)
  })
