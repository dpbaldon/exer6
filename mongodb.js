import mongoose from 'mongoose';

await mongoose.connect('mongodb+srv://dpbaldon:6sgCczBkWY2ITVOg@cluster0.13bwyiw.mongodb.net/ICS');

const Student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
  })

let data = await Student.findOne({ fname: "Peter", lname: "Parker" });
console.log(data);

const newStudent = new Student({
    stdnum: 12345678,
    fname: "Juan",
    lname: "dela Cruz",
    age: 20
});

await newStudent.save();