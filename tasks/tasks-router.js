const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    // get all tasksfrom the database
    Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


  router.get('/:id', (req, res) => {
    const { id } = req.params;
  Tasks.findById(id)
  .then(tasks => {
    if (tasks) {
      res.json(tasks);
    } else {
      res.status(404).json({ message: 'Could not find tasks with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
  });

  router.post('/', (req, res) => {
    const taskData = req.body;
  
   Tasks.add(taskData)
    .then(newtask => {
      res.status(201).json(newtask);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

  module.exports = router;