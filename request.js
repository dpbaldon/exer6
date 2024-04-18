import needle from 'needle';

// needle.post('http://localhost:3000/save-student', {
//   stdnum: "222299999",
//   fname: "Tony",
//   lname: "Stark",
//   age: 40
// }, (err, res) => {
//   if (err) {
//     console.error("ERROR", err);
//   } else {
//     console.log(res.body);
//   }
// });

// needle.post('http://localhost:3000/update-student', {
//   fname: "Jo"
// }, (err, res) => {
//   if (err) {
//     console.error("ERROR", err);
//   } else {
//     console.log(res.body);
//   }
// });

// needle.post('http://localhost:3000/get-user', {
//   stdnum: "12345678"
// }, (err, res) => {
//   if (err) {
//     console.error("ERROR", err);
//   } else {
//     console.log(res.body);
//   }
// });

needle.post('http://localhost:3000/get-members', (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});

// needle.post('http://localhost:3000/remove-user', {
//   fname: "Tony"
// }, (err, res) => {
//   if (err) {
//     console.error("ERROR", err);
//   } else {
//     console.log(res.body);
//   }
// });

needle.post('http://localhost:3000/remove-all-users', (err, res) => {
  if (err) {
    console.error("ERROR", err);
  } else {
    console.log(res.body);
  }
});