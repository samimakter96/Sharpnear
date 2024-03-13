function buyBike(callback) {
  setTimeout(function() {
    console.log("Bought Royal Enfield Himalayan")
    callback();
  }, 2000)
}

function planTrip() {
  setTimeout(function() {
    console.log("Trip to Ladakh")
  }, 1000)
}

buyBike(planTrip);