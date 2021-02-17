const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  idClient: { type: mongoose.Schema.ObjectId, ref: 'books', required: true },
  nameBook: { type: String, required: true },
  unitValue: { type: Number, required: false, min: 0 },
  quantity: { type: Number, required: true, min: 0 },
  details: [{type: mongoose.Schema.ObjectId, ref: 'details', required: true}]
}, {
  timestamps: true
});

const Sales = mongoose.model('sales', salesSchema);

module.exports = Sales;