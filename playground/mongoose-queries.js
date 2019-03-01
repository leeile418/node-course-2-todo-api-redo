const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5c799401f2e307101cf08a3a11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };
// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));




User.findById('5c7934a542cf667c35781f52').then((user) => {
  if (!user) {
      return console.log('User not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}, (e) => {
  console.log(e);
})
