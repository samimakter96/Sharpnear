// Defining a class named Student
class Student {
  // Constructor method for initializing Student objects with name, age, and marks
  constructor(name, age, marks) {
    // Assigning name parameter to the name property of the object
    this.name = name;
    // Assigning age parameter to the age property of the object
    this.age = age;
    // Assigning marks parameter to the marks property of the object
    this.marks = marks;
  }

  // Method to set the minimum placement age and return a function
  setPlacementAge(minPlacementAge) {
    // Returning a function that takes minMarks as a parameter
    return (minMarks) => {
      // Checking if marks and age meet the placement criteria
      if (this.marks >= minMarks && this.age >= minPlacementAge) {
        // Returning true if the criteria are met
        return true;
      } else {
        // Returning false if the criteria are not met
        return false;
      }
    };
  }
}

// Creating a new Student object named Samim
const Samim = new Student("Samim", 20, 100);

// Calling the setPlacementAge method with a minimum placement age of 22
// Then immediately calling the returned function with a minimum marks of 60
console.log(Samim.setPlacementAge(22)(60));
