const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy - user name and password
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  // Vertify this email and password, call done with the user
  User.findOne({ email: email }, function (error, user) {
    if (error) { return done(error, false); }
    if (!user) { return done(null, false); }

    // Compare password
    // 'user' is returned by User.findOne
    user.comparePassword(password, function (error, isMatch) {
      if (error) { return done(error, false); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the User ID in the payload exists in database

  console.log('Payload Jwt Strategy', payload);

  User.findById(payload.sub, function (error, user) {
    if (error) { return done(error, false); }

    // If it does, call 'done' with that user object
    // otherwise, call 'done' without a user object
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);

// Export passport to be used in middleware
module.exports = passport;