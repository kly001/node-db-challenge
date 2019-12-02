const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    // get all resourcesfrom the database
    Resources.find()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


  router.get('/:id', (req, res) => {
    const { id } = req.params;
  Resources.findById(id)
  .then(resources => {
    if (resources) {
      res.json(resources);
    } else {
      res.status(404).json({ message: 'Could not find resources with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
  });

  router.post('/', (req, res) => {
    const resourceData = req.body;
  
   Resources.add(resourceData)
    .then(newresource => {
      res.status(201).json(newresource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Resources.update(changes,id)
    .then(resource => {
      if (resource) {
        res.json({ update: resource });
      } else {
        res.status(404).json({ message: 'Could not find resource with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update resource'});
    });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Resources.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: 'Could not find resource with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete resource' });
    });
  });


  module.exports = router;