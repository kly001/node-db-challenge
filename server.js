const express = require('express');

const server = express();

const ProjectsRouter = require('./projects/projects-router.js');
const TasksRouter = require('./tasks/tasks-router.js');
const ResourcesRouter = require('./resources/resources-router.js');

server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter)
server.use('/api/resources', ResourcesRouter)


server.get('/',(req,res) => {
    res.send("<h1>node-db-challenge</h1>")
  })


module.exports = server;