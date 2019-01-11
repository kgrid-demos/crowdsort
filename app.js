

const express = require('express');
const app = express();
// morgan logs all requests in the terminal
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const selectionSortRoutes = require('./api/routes/selectionSort');

mongoose.connect('mongodb+srv://CrowdSort:RdaGL7mw7az2vN4@crowdsort-ikmzw.mongodb.net/test?retryWrites=true',{
  useNewUrlParser: true,
  
})

mongoose.Promise = global.Promise;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/selectionSort', selectionSortRoutes);

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 
  'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method ==="OPTIONS"){
    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH,DELETE,GET');
    return res.status(200).json({});
  }
  next();
});

// Error handling
app.use((req,res,next) => {
  const error = new Error('Not found');
  error.status= 404;
  next(error);
})

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message: error.message
    }
  });
});



module.exports = app;