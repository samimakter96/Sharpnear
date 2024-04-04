// Q.1
const obj1 = {
  'key1': 'value1',
  'key2': 'value2',
  'key3': 'value3'
}

const obj2 = {...obj1}
// console.log(obj2);

// console.log(obj1 === obj2); // false

// Q.2
const obj3 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const obj4 = {...obj3, 'key1': 'New value', 'key3': 10000}
console.log(obj4);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); 

// normal code 
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(6, 4, 5));

// using spread operator -> we can use too many arguments and calculate sum
const sumVal = (...args) => {
  // const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sumVal(6, 4, 5));
console.log(sumVal(6, 4, 5, 10));
console.log(sumVal(6, 4, 5, 10, 50));

// maximum in an array using spread operator

const arr = [12, 67, 30, 45, 93, 35];
const maximumValue = Math.max(...arr);
console.log(maximumValue); // give the maximum value 93


// Q
const arrObj = [
  { source: 16, square: null },
  { source: 64, square: null },
  { source: 121, square: null },
];

// function getTheSquare(arrayOfObjects) {
//   arrayOfObjects.forEach((item) => {
//       let sourceValue = item.source;
//       let squareValue = Math.sqrt(sourceValue);
//       item.square = squareValue;
//   });
//   return arrayOfObjects;
// }
// console.log(getTheSquare(arrObj));

const ans = arrObj.map((obj) => {
  return { ...obj, square: obj.source ** 0.5 };
});
console.log(ans);