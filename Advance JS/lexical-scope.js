// Example: 1

// Define a variable in the global scope:
var fullName = "Samim Akter";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

// Call the profile function to print the full name:
console.log(profile()); // Output: Samim Akter

// lexical Scope: writeName() scope ---> sayName() scope ---> profile() scope ---> global scope



// First fullName variable defined in the global scope:
const fullName = "samim Akter";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Biden";
  function sayName() {
    const fullName = "Trump";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile());