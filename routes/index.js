var router = require('express').Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/recipes')
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/recipes',  //Change to main page
    failureRedirect : '/'   //Change to main page
  }
));

// LOGOUT route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/recipes');
});

module.exports = router;
