var router = require('express').Router();
var chefsCtrl = require('../controllers/chefs');

router.get("/:id", isLoggedIn, chefsCtrl.show);
router.get("/:id/fridge", isLoggedIn, chefsCtrl.showFridge);

router.get('/:id/fridge/edit', isLoggedIn, chefsCtrl.editFridge);
router.put('/:id/fridge/add', isLoggedIn, chefsCtrl.addIngredient);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;