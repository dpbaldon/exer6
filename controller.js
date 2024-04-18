import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/ICS",{ useNewUrlParser: true, useUnifiedTopology: true
});

const Student = require('model');

const saveStudent = async (req, res) => {
    const { stdnum, fname, lname, age } = req.body;
    const student = new Student({ stdnum, fname, lname, age });
    await student.save();
    res.json({ inserted: true });
};

const updateStudent = async (req, res) => {
    const { fname } = req.body;
    await Student.updateOne({ fname: 'Mary Jane' }, { lname: 'Parker' });
    res.json({ updated: true });
};

const removeUser = async (req, res) => {
    await Student.deleteOne({ stdnum: req.body.stdnum });
    res.json({ removed: true });
};

const removeAllUsers = async (req, res) => {
    res.send(await Student.deleteMany());
    if (result.deletedCount > 0) {
      res.json({ deleted: true });
    } else {
      res.json({ deleted: false });
    }
};

const getUser = async (req, res) => {
    res.send(await Student.find({ fname: req.query.stdnum }));
};

const getMembers = async (req, res) => {
    const members = await Student.find();
    res.json(members);
};

export { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getMembers };