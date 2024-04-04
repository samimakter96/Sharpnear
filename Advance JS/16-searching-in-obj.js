// Given a student object as shown below can you write code to iterate through object and find the student's name who is of age n

const studentObj = {
  'Aman': 30,
  'John': 45,
  'Anupam': 25,
  'Samim': 20
}

const age = 25;

function findStudentObj(Obj, age) {
  for (let key in Obj) {
    if (Obj[key] === age) {
      return key;
    } 
  }
  return - 1
}
const ans = findStudentObj(studentObj, age);
console.log(ans);
