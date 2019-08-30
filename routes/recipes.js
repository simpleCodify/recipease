var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');

router.get('/recipes', recipesCtrl.findAll);
router.get('/recipes/new', isLoggedIn, recipesCtrl.new);

router.get('/recipes/:id', isLoggedIn, recipesCtrl.findOne);

router.get('/recipes/:id/edit', isLoggedIn, recipesCtrl.edit);

router.put('/recipes/:id', isLoggedIn, recipesCtrl.update);

router.post('/recipes', isLoggedIn, recipesCtrl.create);

router.delete('/recipes/:id', isLoggedIn, recipesCtrl.delete);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
