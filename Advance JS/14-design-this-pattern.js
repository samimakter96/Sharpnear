// Define a class named Student
class Student {
  // Define a static property called 'count' to keep track of the number of students, initialized to 0
  static count = 0;

  // Constructor function to create instances of the Student class
  constructor(name, age, phoneNo, marks) {
    // Initialize instance properties: name, age, phoneNo, and marks
    this.name = name;
    this.age = age;
    this.phoneNo = phoneNo;
    this.marks = marks;
    // Call the static method increaseStudentCount() to increment the count of students
    Student.increaseStudentCount();
  }

  // Method to check eligibility of a student
  eligible() {
    // Check if the student's marks are greater than or equal to 40
    if (this.marks >= 40) {
      // If marks are sufficient, print a message indicating eligibility
      console.log(`${this.name} age ${this.age} is eligible`);
    } else if (this.marks < 40) {
      // If marks are not sufficient, print a message indicating ineligibility
      console.log(`${this.name} age ${this.age} is not eligible`);
    }
  }

  // Static method to increase the count of students
  static increaseStudentCount() {
    // Increment the count of students
    Student.count++;
  }

  // Static method to print the count of students
  static printStudentCount() {
    // Print the count of students
    console.log(Student.count);
  }
}

// Create instances of the Student class with respective details
const Samim = new Student("Samim", 20, 2384938, 41);
const Aman = new Student("Aman", 30, 4733849, 34);
const Kartik = new Student("Kartik", 25, 3923849, 39);

// Call the static method to print the total count of students
Student.printStudentCount();

// Call the 'eligible' method for each student instance to check their eligibility
Samim.eligible();
Aman.eligible();
Kartik.eligible();
