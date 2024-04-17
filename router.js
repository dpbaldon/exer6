const express = require('express');
const router = express.Router();
const { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getMembers } = require('../controller/studentController');

router.post('/save-student', saveStudent);
router.post('/update', updateStudent);
router.post('/remove-user', removeUser);
router.post('/remove-all-user', removeAllUsers);
router.get('/user', getUser);
router.get('/members', getMembers);

module.exports = router;