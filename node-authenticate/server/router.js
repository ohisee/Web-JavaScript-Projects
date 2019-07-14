const Authentication = require('./controllers/authentication');
const passport = require('./services/passport');

// Middleware
// 'Session: false' to turn off passport cookie based authentication
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

/**
 * Router
 * app.get('/', function(req, res, next) {
 *  res.send(['a', 'b', 'c']); 
 * });
 * @param app express app
 */
module.exports = function (app) {

  app.get('/', requireAuth, function (req, res) {
    res.send({ success: true });
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

};