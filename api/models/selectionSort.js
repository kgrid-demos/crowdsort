
const mongoose = require('mongoose');

const sortSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // The type and required syntax ensures that the user enters the data type
  date: {type: Number, required: true},
  time:{type:Number, required: true},
  hasExpectedSolution: {type: String , required: true},
  expectedSolution: {type: String , required: true},
  expectedSelectionConfidence: {type: String , required: true},
  userSelection: {type: String , required: true},
  userSelectionConfidence: {type: String , required: true},
  notSelected:{type: String , required: true}
});

module.exports = mongoose.model('SelectionSort',sortSchema);