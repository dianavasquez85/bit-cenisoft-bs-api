const express = require('express');
const router = express.Router();
const { createDetail, getDetails } = require('./actions');

//GET ALL 
router.get('/', getDetails);

// GET by ID

// POST Create a Client
router.post('/', createDetail);

// PUT Update a Client's info


// DELETE by ID
module.exports = router;