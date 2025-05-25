const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: String,
  url: String
});

module.exports = mongoose.model('Data', dataSchema);
