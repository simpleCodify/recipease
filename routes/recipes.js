var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');

router.get('/recipes', recipesCtrl.findAll);

// router.get('/recipes/:id', recipesCtrl.findOne);

// router.post('/recipes', isLoggedIn, recipesCtrl.create);

// router.put('/recipes/:id', recipesCtrl.update);

// router.delete('/recipes/:id', isLoggedIn, recipesCtrl.delete);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
