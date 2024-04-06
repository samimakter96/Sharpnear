function checkWeather() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const weather = Math.random() > 0.5;
      if (weather) {
        resolve('Let us go for picnic')
      } else {
        reject('Error: It is cloudy')
      }
    }, 3000)
  })
}

checkWeather()
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.log(error)
  })