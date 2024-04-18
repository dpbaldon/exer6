import mongoose from 'mongoose';

// Connect to MongoDB
await mongoose.connect('mongodb+srv://dpbaldon:6sgCczBkWY2ITVOg@cluster0.13bwyiw.mongodb.net/ICS');
console.log("connected to mongodb");

// Define the student schema
const Student = mongoose.model('students', {
  stdnum: Number,
  fname: String,
  lname: String,
  age: Number
}, 'studentData');

const saveStudent = async (req, res) => {
    const { stdnum, fname, lname, age } = req.body;
    const student = new Student({ stdnum, fname, lname, age });
    await student.save();
    res.json({ inserted: true });
};

const updateStudent = async (req, res) => {
    const { fname } = req.body.fname;
    const updated = await Student.updateOne({ fname: fname }, { lname: 'Parker' });
    res.json({ updated: true });
};

const removeUser = async (req, res) => {
    const deleteone = await Student.deleteOne({ stdnum: req.body.stdnum });
    res.json({ removed: true });
};

const removeAllUsers = async (req, res) => {
    try {
    const deleteall = await Student.deleteMany({});
    return res.status(200).json({ deleted: true, deleteCount: deleteall.deleteCount });
    } catch (error) {
        console.error("error:", error);
        return res.status(500).send("error");
    }
};

const getUser = async (req, res) => {
    const find = await Student.find({ fname: req.query.stdnum });
};

const getMembers = async (req, res) => {
    const members = await Student.find();
    res.json(members);
};

export { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getMembers };