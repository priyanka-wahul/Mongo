const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res) => {
    console.log("connection sucessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name : 'String',
    email : 'String',
    age : 'Number',
});

const User = mongoose.model("User",userSchema);

User.findOneAndDelete("priyanka").then((res) =>{
  console.log(res);
});

// User.findByIdAndDelete({_id:'68e230d4a830d49a675ddca1'}).then((res) =>{
//   console.log(res);
// });

// User.findByIdAndUpdate({_id:'68e22c1ac3c85a45762ec551'},{age:22},{new : true}).then(res => {
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// });

// User.findById("68e230d4a830d49a675ddc9f").then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// User.insertMany([
//   {name:"RM",email:"rm@yahoo.in",age:30},
//   {name:"Jin",email:"jin@gmail.com",age:32},
//   {name:"Jimin",email:"jimin@yahoo.in",age:29},
// ]).then((data) =>{
//   console.log(data);
// });

// const user2 = new User({
//   name : "v",
//   email : "v@gmail.com",
//   age : 28
// });

// user2.save().then((res) => {
//   console.log(res);
// }).catch((err) =>{
//   console.log(err);
// });