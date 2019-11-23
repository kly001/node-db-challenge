const express = require('express');

const server = express();

server.use(express.json());


server.get('/',(req,res) => {
    res.send("<h1>Karen's Sprint Test</h1>")
  })


module.exports = server;