const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    // get all projects from the database
    Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

  router.post('/', (req, res) => {
    const projectData = req.body;
  
   Projects.add(projectData)
    .then(newproject => {
      res.status(201).json(newproject);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

  module.exports = router;