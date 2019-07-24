const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  is_alive: {
    type: Boolean,
    default: true
  },
  birth_date: {
    type: Date,
    default: new Date()
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
