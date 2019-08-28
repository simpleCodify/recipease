var Recipe = require('../models/recipe');
var Chef = require('../models/chef');
var Ingredient = require('../models/ingredient');

module.exports = {
    addToRecipe,
    findAll
    // create,
    // new: newIngredient
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

  function findAll(req, res, next) {
    Ingredients.find({}, (err, ingredients) => {
      console.log(ingredients)
    });
}

  // function create(req, res) {
  //     var ingredient = new Ingredient({
  //         category: req.body.category,
  //         name: req.body.name,
  //         life: req.body.life
  //     });
  //     ingredient.save()
  //     .then(function(data) {
  //         res.send(data);
  //     }).catch(function(err) {
  //         res.status(500).send({
  //             message: err.message || "Error occurred while creating the Ingredient."
  //         });
  //     });
  // }

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
  