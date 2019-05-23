const express = require('express');

const server = express();

// your code here
const db = require('./data/accounts-model.js');

server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const returnedData = await db.find();

    res.send(returnedData);
  } catch(err) {
    res.status(500).send(err);
  }
})

server.post('/', async (req, res) => {
  try {
    const postData = req.body;
    const returnedData = await db.add(postData);

    res.status(201).send(returnedData);
  } catch(err) {
    res.status(500).send(err);
  }
})

server.put('/:id', async (req, res) => {
  try {
    const targetId = req.params.id;
    const updateData = req.body;
    const returnedData = await db.update(targetId, updateData);

    res.send(returnedData);
  } catch(err) {
    res.status(500).send(err);
  }
})

server.delete('/:id', async (req, res) => {
  try {
    const targetId = req.params.id;
    const returnedData = await db.remove(targetId);

    res.send(returnedData);
  } catch(err) {
    res.status(500).send(err);
  }
})

module.exports = server;