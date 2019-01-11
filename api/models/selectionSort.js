
const mongoose = require('mongoose');

const sortSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // The type and required syntax ensures that the user enters the data type
  date: {type: Number, required: true},
  hasExpectedSolution: {type: String , required: true}

});

module.exports = mongoose.model('SelectionSort',sortSchema);