const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NumSecret = 10;
const jwt = require('jsonwebtoken');

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

// 비번 암호화
userSchema.pre('save', function(next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(NumSecret, function(err, salt) {
      if (err) return next(ett);
      bcrypt.hash(user.password, salt, function(err, hsah) {
        if (err) return next(ett);
        user.password = hsah;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.comparePassword = function(original, cb) {
  bcrypt.compare(original, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('user', userSchema);

module.exports = { User };
