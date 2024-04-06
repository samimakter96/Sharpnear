async function busBoarding() {
  try {
    function boardBusAt10() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const bussArrive = Math.random() > 0.5;
          if (bussArrive) {
            resolve("Board the bus")
          } else {
            reject('Error: Bus is late')
          }
        }, 3000)
      })
    }

    const busBoard = await boardBusAt10()
    console.log(busBoard)

  } catch (error) {
    console.log(error)
  }
}

busBoarding();