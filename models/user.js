const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    Maxlength: 50
  },
  email: {
    type: String,
    trrim: true
  },
  password: {
    type: String,
    minlength: 6
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

const User = mongoose.model('user', userSchema);

module.exports = { User };
