import needle from 'needle';
const base = 'http://localhost:3000';

// Delete 1 Student
needle.post('http://localhost:3000/remove-user', {
  stdnum: "222299999"
}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// Delete All Students
needle.post('http://localhost:3000/remove-all-user', {}, (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});