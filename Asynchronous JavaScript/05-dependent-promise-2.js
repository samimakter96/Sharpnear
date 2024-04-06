function checkCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const carReady = Math.random() > 0.5;
      if (carReady) {
        resolve('Car is ready')
      } else {
        reject('Error: Car needs maintenance')
      }
    }, 2000)
  })
}

function packForPicnic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const packReady = Math.random() > 0.5;
      if (packReady) {
        resolve('Packed everything for picnic')
      } else {
        reject('Error: Not have some essentials')
      }
    }, 1000)
  })
}


checkCar()
  .then((result) => {
    console.log(result)
    return packForPicnic()
  })
  .then((packResult) => {
    console.log(packResult)
    console.log('Go for picnic')
  })
  .catch((error) => {
    console.log(error)
    console.log('Picnic cancelled')
  })