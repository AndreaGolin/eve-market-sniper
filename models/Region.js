const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const regionSchema = new Schema({
  name: {
    type: String,
  },
  regionId: {
    type: String,
  },
});

const Region = mongoose.model('Region', regionSchema);

module.exports = Region;