var router = require('express').Router();
var passport = require('passport');
var recipesCtrl = require('../controllers/recipes');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {
//     user: req.user,
//   });
// });

router.get('/', recipesCtrl.home);

router.get('/home', recipesCtrl.home);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/home',  //Change to main page
    failureRedirect : '/home'   //Change to main page
  }
));

// LOGOUT route
router.get('/logout', function(req, res) {
  req.logout('/home');
  res.redirect('/home');
});

module.exports = router;
