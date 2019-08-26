var router = require('express').Router();
var ingredientsCtrl = require('../controllers/ingredients');

router.get('/ingredients/new', ingredientsCtrl.new);

router.post('/ingredients', ingredientsCtrl.create);

router.post('/recipes/:id/ingredients', ingredientsCtrl.addToRecipe);

module.exports = router;