const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  zone: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: 'Polygon',
    },
    coordinates: {
      type: [[[Number]]], // Array of array of array of numbers
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  is_active: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

const Zone = mongoose.model('Zone', zoneSchema);

module.exports = Zone;
