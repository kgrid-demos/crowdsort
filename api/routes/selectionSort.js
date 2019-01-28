// Handles selection related routes 
const express = require('express');
const router = express.Router();
const Selection = require('../models/selectionSort');
const mongoose = require('mongoose');


// GET request that fetches all the data
router.get('/', (req, res, next) => {

  Selection.find()
    .select('date time userSelected userNotSelected _id')
    .exec()
    .then(docs => {
      const response = {
        // Method to output the number of total selections that have been made
        count: docs.length,
        selection: docs.map(doc => {
          return {
            date: doc.date,
            time: doc.time,
            userSelected: doc.userSelected,
            userNotSelected: doc.userNotSelected,
            _id: doc._id
          }
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log("Error Get " + err);
      res.status(500).json({
        error: err
      });
    });
});

// GET request that fetches the data of a given selection corresponding to the appropriate ID
router.get('/:userid', (req, res, next) => {
  const id = req.params.userid;
  Selection.findById(id)
    .select('date time userSelected userNotSelected _id')
    .exec()
    .then(doc => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json({
          selection: doc
        });
      } else {
        res.status(404).json({ message: 'No valid entry provided for the following ID' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});


// PATCH requests updates the data
// NOTE: Using the POSTMAN patch format [{"propName": "hasExpectedSolution","value": "Aspirin"}] 
router.patch('/:userid', (req, res, next) => {
  const id = req.params.userid;
  const updateOps = {};
  // Searches what kind of request it is looking for (ex. updating just hasExpectedSolution)
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  // Method to update the information by searching the ID
  // First arguement searches for the ID and the second argument sets the corresponding values.
  Selection.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Selection updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
});

// DELETE request that deletes the data with the given user id
router.delete('/:userid', (req, res, next) => {
  const id = req.params.userid;
  Selection.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Selection deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/', (req, res, next) => {
  const selection = new Selection({
    _id: new mongoose.Types.ObjectId(),
    date: req.body.date,
    time: req.body.time,
    userSelected: req.body.userSelected,
    userNotSelected: req.body.userNotSelected
  });
  selection
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Handling POST requests to selectionSort',
        createdSelection: {
          date: result.date,
          time: result.time,
          userSelected: result.userSelected,
          userNotSelected: result.userNotSelected,
          _id: result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
});

module.exports = router;