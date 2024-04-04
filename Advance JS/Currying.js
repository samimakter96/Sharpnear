// Currying function in javaScript

// function Addition(a, b, c) {
//   return a + b + c
// }

// let res = Addition(2, 3, 4);
// console.log(res);

function Addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let res = Addition(2);
let data = res(4);
let data1 = data(7);
console.log(data1);

// let res = Addition(2)(4)(7);  // we can do this way also
// console.log(res);

userObj = {
  name: "Samim",
  age: 20,
};

function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}

let result = userInfo(userObj);
console.log(result("name"));

// function currying using bind method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyTwo = multiply.bind(this, 2);
multiplyTwo(5);

let multiplyThree = multiply.bind(this, 3);
multiplyThree(5);

// function currying by closures
let multi = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiTwo = multi(2);
multiTwo(3);

let multiThree = multi(3);
multiThree(3);
