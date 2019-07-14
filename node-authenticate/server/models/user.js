/**
 * User model for mongoose
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Define user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true, required: true, trim: true },
  password: { type: String, required: true },
});

// On Save Hook, encrypt password
userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, function (error, salt) {
    if (error) { return next(error); }

    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) { return next(error); }

      user.password = hash;
      next();
    })
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (error, isMatch) {
    if (error) { return callback(error); }

    callback(null, isMatch);
  });
}

// Create the user model class
const ModelClass = mongoose.model('user', userSchema);

// Expore the user model
module.exports = ModelClass;