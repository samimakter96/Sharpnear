function orderFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foodDelivered = Math.random() > 0.5;
      if (foodDelivered) {
        resolve('Food delivered')
      } else {
        reject('Food not delivered')
      }
    }, 2000)
  })
}


function orderDessert() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dessertOrder = Math.random() > 0.5;
      if (dessertOrder) {
        resolve('dessert Delivered')
      } else {
        reject('Dessert is not Delivered')
      }
    }, 2000)
  })
}


orderFood()
  .then((result) => {
    console.log(result)
    return orderDessert()
  })
  .then((dessertMessage) => {
    console.log(dessertMessage)
    console.log('Dream meal fulfill')
  })
  .catch((error) => {
    console.log(error)
    console.log('Dream meal failed')
    
  })