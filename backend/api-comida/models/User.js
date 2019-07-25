const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  photo_url: {
    type: String,
  },
  direction: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  is_active: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

// disparador (middleware) para que haga algo antes de guardar
// eslint-disable-next-line func-names
userSchema.pre('save', function (next) {
  // this hace referencia al usuario que se esta guardando en el momento
  const user = this;
  if (!user.isModified('password')) return next();
  // Si lo modifican tengo que cifrar el password y reemplazarlo para guardarlo
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
