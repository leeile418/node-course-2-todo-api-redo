// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// //deleteOne
//   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
//   });

//findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //     console.log(result);
  // });

db.collection('Users').deleteMany({name: 'Ile'}).then((result) => {
  console.log(result);
});


db.collection('Users').findOneAndDelete({
  _id : new ObjectID('5c7870e21c8cdc15200317fb')
}).then((res) => {
  console.log(JSON.stringify(res,undefined,2));
});



  //db.close();
});
