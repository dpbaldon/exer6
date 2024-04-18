export { Student };

// Connect to MongoDB
await mongoose.connect('mongodb+srv://dpbaldon:6sgCczBkWY2ITVOg@cluster0.13bwyiw.mongodb.net/ICS');

// Define the student schema
const Student = mongoose.model('students', {
  stdnum: Number,
  fname: String,
  lname: String,
  age: Number
}, 'studentData');

export { Student };