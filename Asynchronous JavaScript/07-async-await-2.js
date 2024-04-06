async function weather() {
  try {
    function checkWeather() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSunny = Math.random() > 0.5;
          if (isSunny) {
            resolve('Let us go for picnic')
          } else {
            reject('Error: It is cloudy')
          }
        }, 3000)
      })
    }

    const picnic = await checkWeather() 
    console.log(picnic)

  } catch (error) {
    console.log(error)
  }
}

weather();