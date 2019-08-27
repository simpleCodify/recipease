var Recipe = require('../models/recipe');
var Ingredient = require('../models/ingredient');
var Chef = require('../models/chef');

module.exports = {
    findAll,
    findOne,
    new: newRecipe,
    create,
    edit,
    update,
    delete: deleteRecipe
};

function findAll(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    Recipe.find(modelQuery, (err, recipes) => {
        res.render('recipes/index', { 
            recipes,
            user: req.user,
            name: req.query.name
        });
    });
}

function findOne(req, res, next) {
    Recipe.findById(req.params.id)
    .populate('reqIngredients')
    .exec((err, recipe)=> {
        res.render("recipes/show", {
            ingredients: recipe.reqIngredient,
            user: req.user,
            title: recipe.name,
            recipe
        });
    });
};

// function findOne(req, res, next) {
//     Recipe.findById(req.params.id, (err, recipe) => {
//         res.render("recipes/show", {
//             title: recipe.name,
//             user: req.user,
//             recipe,
//         });
//     });
// };

function newRecipe(req, res, next) {
    res.render("recipes/new", {
        user: req.user
    });
}

function create(req, res) {
    var recipe = new Recipe({
        title: req.body.title,
        prepTime: req.body.prepTime,
        ingredients: req.body.ingredients,
        chef: req.session.passport.user,
        instructions: req.body.instructions
    });
    recipe.save()
    .then(function(data) {
        res.redirect(`/recipes/${recipe._id}`);
    }).catch(function(err) {
        res.status(500).send({
            message: err.message || "Error occurred while creating the Recipe."
        });
    });
}

function edit(req, res) {
    Recipe.findById(req.params.id, (err, recipe) => {
        Ingredient.find({}, (err, ingredient)=> {
            res.render("recipes/edit", {
                ingredient,
                title: `${recipe.name}`,
                user: req.user,
                recipe,
                ingredients: recipe.reqIngredient
            });
        })
    });
}

function update(req, res) {
    Recipe.findById(req.params.id, (err, recipe) => {
        Ingredient.find({}, (err, ingredient) => {
            recipe.title = req.body.title;
            recipe.prepTime = req.body.prepTime;
            // recipe.reqIngredient.push(i);
            console.log(ingredient);
            recipe.instructions = req.body.instructions;
            recipe.save(err => {
                res.redirect(`/recipes/${recipe._id}`);
            });
        })
    });
}

function deleteRecipe(req, res, next) {
    Recipe.findByIdAndDelete(req.params.id, (err) => {
        res.redirect(`/chefs/${req.user.id}`)
    });
}

