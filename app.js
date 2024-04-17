import { Student } from './model.js';

// Find a student
let data = Student.findOne({ fname: "Peter", lname: "Parker" });
console.log(data);

// Create a new student
const newStudent = new Student({
  stdnum: 12345678,
  fname: "Juan",
  lname: "dela Cruz",
  age: 20
});

newStudent.save();