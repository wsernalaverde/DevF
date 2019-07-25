const mongoose = require('mongoose');
const { ENUM_CATEGORY } = require('../utils/const');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  category: {
    type: String,
    enum: ENUM_CATEGORY,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  operation_time_start: {
    type: [Date],
    required: true,
  },
  operation_time_end: {
    type: [Date],
    required: true,
  },
  score: {
    type: Number,
  },
  logo_url: {
    type: String,
  },
  products: {
    type: [
      {
        name: {
          type: String,
        },
        price: {
          type: Number,
          required: true,
        },
        stock: {
          type: Number,
          required: true,
        },
        photo_url: {
          type: Number,
        },
      },
    ],
  },
}, { timestamps: true });

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
