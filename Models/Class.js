const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  selectedSession: Number,
});

module.exports = mongoose.model('Class', classSchema);
