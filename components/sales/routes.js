const express = require('express');
const router = express.Router();
const { createSale, getSale, getSales } = require('./actions');

//GET ALL 
router.get('/', getSales);

// GET by ID
router.get('/:id', getSale);

// POST Create a Client
router.post('/', createSale);

// PUT Update a Client's info


// DELETE by ID
module.exports = router;