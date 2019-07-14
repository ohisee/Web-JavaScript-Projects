const User = require('../models/user');
const config = require('../config');
const jwt = require('jwt-simple');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

/**
 * Sign up
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function signup(req, res, next) {
  const email = req.body['email'];
  const password = req.body['password'];

  if (!email || !password) {
    return res.status(400).send({ error: 'Missing input' });
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function (error, existingUser) {
    if (error) { return next(error); }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({ email: email, password: password });

    user.save(function (error) {
      if (error) { return next(error); }

      res.json({ token: tokenForUser(user) });
    });

  });
}


/**
 * Sign in
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function signin(req, res, next) {
  if (!req.user) {
    return res.status(400).send({ error: 'Incorrect user' });
  }
  res.send({ token: tokenForUser(req.user) });
}

module.exports = {
  signup: signup,
  signin: signin
};