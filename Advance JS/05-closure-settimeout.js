// Q. 1

console.log("a");
console.log("b");

setTimeout(() => console.log("c"), 1000);

console.log("d");

// Q.2
console.log("a");

console.log("b");

setTimeout(() => console.log("c"), 1000);

setTimeout(() => console.log("d"), 0);

console.log("e");

// Q.3
var arr = [1, 2, 3, 5];

var newArr = arr.forEach((item, i) => {
  console.log(item + "index" + i);
  return item + i;
});

console.log(newArr); // forEach doesn't return anything (it always returns undefined), newArr will also be undefined.

// Q.3
var arr = [1, 2, 3, 5];

var newArr = arr.map((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr); // map() modified the array and make a brand new array
