export { Student };

// Connect to MongoDB
mongoose.connect('mongodb+srv://dpbaldon:6sgCczBkWY2ITVOg@cluster0.13bwyiw.mongodb.net/ICS');

// Define the student schema
const studentSchema = new mongoose.Schema({
  stdnum: String,
  fname: String,
  lname: String,
  age: Number
});

// Create the Student model
const Student = mongoose.model('students', studentSchema);

module.exports = Student;