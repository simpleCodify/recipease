var Recipe = require('../models/recipe');
var Chef = require('../models/chef');
var Ingredient = require('../models/ingredient');

module.exports = {
    addToRecipe,
    addToFridge,
    findAll,
}

  function addToRecipe(req, res) {
    Recipe.findById(req.params.id)
    .then((recipe) => {
      console.log('ingredientCtrl.addToRecipe: ', req.body.ingredienti)
      .then(ingredient => {
        console.log(ingredient);
        // ingredient.forEach(i=> recipe.reqIngredients.push(i._id));
        recipe.save();
      })
      res.redirect(`/recipes/${recipe._id}`);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  function addToFridge(req, res) {
    Chef.findById(req.user)
    .then((chef) => {
      console.log("This is the CHEF: " + chef);
      ingredients = chef.fridge;
      console.log("This is the CHEF's Fridge" + ingredients);
    })
    Ingredient.findById()
  }

  function findAll(req, res, next) {
    Ingredients.find({}, (err, ingredients) => {
      console.log(ingredients)
    });
}