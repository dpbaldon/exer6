const Student = require('model');

const saveStudent = async (req, res) => {
  try {
    const { stdnum, fname, lname, age } = req.body;
    const student = new Student({ stdnum, fname, lname, age });
    await student.save();
    res.json({ inserted: true });
  } catch (error) {
    console.error(error);
    res.json({ inserted: false });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { fname } = req.body;
    await Student.updateOne({ fname: 'Mary Jane' }, { lname: 'Parker' });
    res.json({ updated: true });
  } catch (error) {
    console.error(error);
    res.json({ updated: false });
  }
};

const removeUser = async (req, res) => {
  try {
    await Student.deleteOne({ stdnum: req.body.stdnum });
    res.json({ removed: true });
  } catch (error) {
    console.error(error);
    res.json({ removed: false });
  }
};

const removeAllUsers = async (req, res) => {
  try {
    const result = await Student.deleteMany();
    if (result.deletedCount > 0) {
      res.json({ deleted: true });
    } else {
      res.json({ deleted: false });
    }
  } catch (error) {
    console.error(error);
    res.json({ deleted: false });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await Student.find({ stdnum: req.query.stdnum });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.json([]);
  }
};

const getMembers = async (req, res) => {
  try {
    const members = await Student.find();
    res.json(members);
  } catch (error) {
    console.error(error);
    res.json([]);
  }
};

module.exports = { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getMembers };