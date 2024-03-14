import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/<PUT DB NAME HERE>', { useNewUrlParser: true, useUnifiedTopology: true });

// Subject model with forced collection name (e.g. topics)
const Student = mongoose.model('Subject', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
  }, 'studentData')

// the result parameter will contain a single object (the first matching document found
// if no matching document was found, result will be null
// let data = await Student.findOne({ fname: “Peter”, lname: “Parker” });
// console.log(data);

// results here will always be an array, regardless of how many matching documents were found
let data = await Student.find({ age: 17 });
console.log(data);

const newStudent = new Student({
    stdnum: "12345678",
    fname: "Juan",
    lname: "dela Cruz",
    age: 20
});

await newStudent.save();

// simple update
let stud = await Student.findOne({ age: 65});
stud.fname = 'Peter'
await stud.save();
// updates a single document and returns an object containing the result details (NOT the document).
await Student.updateOne(
    { age: 17 },
    {$set: {fname: 'John'}}
  );
  
  // updates multiple documents and returns an object containing the result details (NOT the documents)
  await Student.updateMany(
    { age: 65 },
    {$set: {age: 17}}
  );


// delete
await Student.deleteOne({ stdnum: 8051495845})

await Student.deleteMany({ fname: 'John' })
