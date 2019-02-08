
const mongoose = require('mongoose');

const sortSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // The type and required syntax ensures that the user enters the data type
  date: {type:String, required:true},
  time: {type:String, required:true},
  comparison: {type:String, required:true},
  userSelected: {type:String, required:true},
  userNotSelected: {type:String, required:true}
});

module.exports = mongoose.model('SelectionSort',sortSchema);