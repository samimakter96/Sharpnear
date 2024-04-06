/*
function orderPopCon() {
  console.log('PopCon ordered')
}

function receivePopCon() {
  console.log('PopCon receive')
}

function goToMovie() {
  console.log('Went for Movie')
}

synchronous steps

orderPopCon();
receivePopCon();
goToMovie();
*/


// Asynchronous js
/*
function orderMeal() {
  console.log('Meal ordered')
  setTimeout( function() {
    console.log('Meal ready')
    returnFromPlayZone();
  }, 2000)
}

function goToPlayZone() {
  console.log('Went to play zone')
}

function returnFromPlayZone() {
  console.log('Returned from play zone and enjoying my meal')
}


orderMeal();
goToPlayZone();
*/

function orderMeal(callback) {
  console.log('Meal ordered')
  setTimeout( function() {
    console.log('Meal ready')
    callback();
  }, 2000)
}

function goToPlayZone() {
  console.log('Went to play zone')
}

function returnFromPlayZone() {
  console.log('Returned from play zone and enjoying my meal')
}


// orderMeal(returnFromPlayZone);
// goToPlayZone();

function goToSalon() {
  console.log('Went to salon')
}

function returnFromSalon() {
  console.log('Return from salon and enjoying meal')
}

orderMeal(returnFromSalon);
goToSalon();


