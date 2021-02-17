const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
  idBook: { type: mongoose.Schema.ObjectId, ref: 'books', required: true },
  nameBook: { type: String, required: true },
  unitValue: { type: Number, required: false, min: 0 },
  quantity: { type: Number, required: true, min: 0 }
}, {
  timestamps: true
});

const Details = mongoose.model('details', detailsSchema);

module.exports = Details;