var router = require('express').Router();
var passport = require('passport');
var chefsCtrl = require('../controllers/chefs');

router.get("/:id", isLoggedIn, chefsCtrl.show);
router.get("/:id/fridge", isLoggedIn, chefsCtrl.browseFridge);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;