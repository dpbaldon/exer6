import { Student } from './model.js';

// Find a student
let data = Student.findOne({ fname: "Peter", lname: "Parker" });
console.log(data);

// Create a new student
const newStudent = new Student({
  stdnum: 123456789,
  fname: "Juan",
  lname: "dela Cruz",
  age: 20
});

await newStudent.save();

// let data = await Student.find({});
// console.log(data);

// data = await Student.findOne({ fname: "Peter", lname: "Parker" });
// console.log(data);

// let data = await Student.find({age: {$gt: 17}});
// console.log(data);