var Recipe = require('../models/recipe');
var Chef = require('../models/chef');
var Ingredient = require('../models/ingredient');

module.exports = {
    addToRecipe,
    create,
    new: newIngredient
}

function addToRecipe(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
      recipe.ingredients.push(req.body.ingredientId);
      recipe.save(function(err) {
        res.redirect(`/recipes/${recipe._id}`);
      });
    });
  }

  function create(req, res) {
      var ingredient = new Ingredient({
          category: req.body.category,
          name: req.body.name,
          life: req.body.life
      });
      ingredient.save()
      .then(function(data) {
          res.send(data);
      }).catch(function(err) {
          res.status(500).send({
              message: err.message || "Error occurred while creating the Ingredient."
          });
      });
  }

  function newIngredient(req, res) {
      Recipe.find({}), function(err, recipes) {
          recipes
      },
    Ingredient.find({}, function(err, ingredients) {
      res.render('ingredients/new', {
        title: 'Add Ingredient',
        ingredients
      });
    })
  }
  