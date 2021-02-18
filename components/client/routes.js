const express = require('express');
const router = express.Router();
const { createClient, getClient, getClients } = require('./actions');

//GET ALL 
router.get('/', getClients);

// GET by ID
router.get('/:id', getClient);

// POST Create a Client
router.post('/', createClient);

// PUT Update a Client's info
router.put('/:id', (req, res) => {
  res.send({})
})

// DELETE by ID
router.delete('/:id', (req, res) => {
  res.send('Cliente deleted successfully!')
})

module.exports = router;
