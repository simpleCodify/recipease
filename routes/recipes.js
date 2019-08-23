var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');

// GET /students
router.get('/recipes', recipesCtrl.index);

// POST /facts
// We have access to the logged in Chef on
// the server, therefore do not use: /chef/:id/recipes !IMPORTANT
// router.post('/recipes', isLoggedIn, studentsCtrl.addFact);

// // DELETE /facts/:id
// router.delete('/facts/:id', isLoggedIn, studentsCtrl.delFact);

// function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
// }

module.exports = router;
