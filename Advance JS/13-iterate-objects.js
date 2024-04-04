const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

for (let key in obj) {
  // console.log(key); // prints only obj keys
  // console.log(obj[key]); // prints only obj values
  // console.log(`${key} : ${obj[key]}`);
}

// Given a student object as shown below can you write code to iterate through object and find average age of students.

// const myObj = {
//   'Samim': 24,
//   'Aman': 25,
//   'Kartik': 26
// }

// let totalStudentAge = 0;
// let totalStudentCount = 0;

// for (let key in myObj) {
//   totalStudentCount++;
//   totalStudentAge += myObj[key];
// }

// const averageAge = (totalStudentAge / totalStudentCount);
// console.log(averageAge);

// The Key method : Syntax - Object.keys(objectName)

let employee = {
  name: 'Samim Akter',
  email: 'diam.sed@augue.org',
  company: 'TCS',
};
// Object keyword using transforming these values into an array so that we can iterate over these values using array's method. because object dosen't support array's methods like map(), forEach()
const employeeKeys = Object.keys(employee);
// console.log(employeeKeys);

// now we iterate the key using array methods
// employeeKeys.forEach((key) => console.log(key));

// we can access the value of the employee
employeeKeys.forEach((value) => {
  // console.log(employee[value]);
});

// update the value
employeeKeys.forEach((key) => {
  if (key === 'email') {
    employee[key] = 'samim@gmail.com';
  }
});
// console.log(employee);

// The Value method : it's same as key method instead of returning keys it returns values.

const employeeValues = Object.values(employee);
// console.log(employeeValues);

employeeValues.forEach((value) => {
  // console.log(value);
});

// The entries method : it returns the key-value pair of each pair in an array.

const employeeEntries = Object.entries(employee);
// console.log(employeeEntries);

// console.log(employeeEntries[0]);
// console.log(employeeEntries[1]);

employeeEntries.forEach((entries) => {
  const key = entries[0];
  const value = entries[1];

  // console.log(`Key: ${key}, value: ${value}`);
});

// Adding new property to objects in an array
let arr = [
  { name: 'Joe', age: 25 },
  { name: 'Moe', age: 30 },
  { name: 'Doe', age: 35 },
];

// How can you use an object iterator and the `map()` method to create a new array of objects where each object has an additional property 'olderAge' that is 5 years more than the 'age' property of the original objects?

let newArr = arr.map((obj) => ({ ...obj, olderAge: obj.age + 5 }));
console.log(newArr);

// change the value name to owner and owner to name
let cats = [
  { name: 'Paul', breed: 'Siamese', owner: 'Bella' },
  { name: 'Lucia', breed: 'Norwegian Forest', owner: 'Lilly' },
];

cats.forEach((cat) => {
  // console.log(cat);
  const name = cat.name;
  const owner = cat.owner;
  cat.name = owner;
  cat.owner = name;
  console.log(
    `${cat.owner} has a cat named ${cat.name}, whose breed is ${cat.breed}`
  );
});

// sum each odd and event number
const myObj = { even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] };

const even = myObj.even;
const odd = myObj.odd;

let sumArr = even.map((key, index) => {
  return key + odd[index];
});
// console.log(sumArr);

// solution 2
function sumTheArrays(naturalNumbers) {
  return naturalNumbers.even.map(
    (evenNumber, index) => evenNumber + naturalNumbers.odd[index]
  );
}
const sum = sumTheArrays(myObj);
console.log(sum);
