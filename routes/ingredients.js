var router = require('express').Router();
var ingredientsCtrl = require('../controllers/ingredients');

// router.get('/ingredients/new', ingredientsCtrl.new);

router.get('/recipes/:id', ingredientsCtrl.findAll);

// router.post('/ingredients', ingredientsCtrl.create);


router.put('/recipes/:id/ingredient', ingredientsCtrl.addToRecipe);

module.exports = router;