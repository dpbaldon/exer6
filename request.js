import needle from 'needle';
const base = 'http://localhost:3000';

// Save Student 1
needle.post('http://localhost:3000/save-student', {
  stdnum: "222299999",
  fname: "Tony",
  lname: "Stark",
  age: 40
}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Save Student 2
needle.post('http://localhost:3000/save-student', {
  stdnum: "123499988",
  fname: "Captain",
  lname: "America",
  age: 33
}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Save Student 3
needle.post('http://localhost:3000/save-student', {
  stdnum: "999987654",
  fname: "Peter",
  lname: "Parker",
  age: 40
}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Save Student 4
needle.post('http://localhost:3000/save-student', {
  stdnum: "111100000",
  fname: "Sherlock",
  lname: "Holmes",
  age: 56
}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Save Student 5
needle.post('http://localhost:3000/save-student', {
  stdnum: "000036547",
  fname: "Edogawa",
  lname: "Conan",
  age: 12
}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Update Student last name
needle.post('http://localhost:3000/update', {
  lname: "Lapitan"
}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Find Student
needle.post('http://localhost:3000/user?stdnum=000036547', (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Find All Students
needle.post('http://localhost:3000/members', (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});