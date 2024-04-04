
// QUESTION 1

var a = 3;

function printName(name){
console.log(name)

}

printName("samim");

console.log(a)


// QUESTION 2

printName("samim");  // print samim because function declare and initialize both together

console.log(a);  // undefined because variable declare first as undefined

var a = 3;  // after initialize now a become 3

function printName(name){
console.log(name)

}


// QUESTION 3

console.log(printName);  // undefined because printName is a variable and as it declare first as undefined

console.log(a); // undefined

var a = 3;

var printName = (name) => {

console.log(name)

}


// QUESTION 4

console.log(printName); // undefined

console.log(a); // undefined

var a = 3;

var printName = function (name) {

console.log(name)

}
