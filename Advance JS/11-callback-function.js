// What is a callback Function in JavaScript

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", count++);
  });
}

attachEventListeners();

// Q.1
setTimeout(() => console.log("timer expired"), 1000);

function x(y) {
  console.log("inside x");
  y();
}

x(function y() {
  console.log("inside y");
});

// Q.2
setTimeout(() => console.log("timer expired"), 1000);

setTimeout(() => console.log("timer2 expired"), 0);

function x(y) {
  console.log("inside x");
  y();
}

x(function y() {
  console.log("inside y");
});

// Q.3
setTimeout(() => console.log("timer expired"), 1000);

setTimeout(() => console.log("timer2 expired"), 0);

function x(y) {
  console.log("inside x");
  y();
}

x(function y() {
  setTimeout(() => console.log("inside y"), 0);
});
