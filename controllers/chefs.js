var Chef = require('../models/chef');
var Recipe = require('../models/recipe');
var Ingredient = require('../models/ingredient');

module.exports = {
    show,
    browseFridge,
    addIngredient
}

function show(req, res) {
    Chef.findById(req.params.id, (err, chef) => {
        Recipe.find({ chef: chef._id }, (err, recipes) => {
            res.render('chefs/show', {
                user: chef,
                chef,
                recipes,
                fridge: chef.fridge
            });
        });
    });
}

function browseFridge(req, res) {
    Chef.findById(req.params.id, (err, chef) => {
        var ingredients = chef.fridge;
        res.render('chefs/fridge', {
            chef,
            user: chef,
            ingredients
        });
    });
}

function addIngredient(req, res) {
    Chef.findById(req.params.id), (err, chef) => {
        var ingredient = new Ingredient({
            category: req.body.category,
            name: req.body.name,
            life: req.body.life,
            amount: req.body.amount
        })
        chef.fridge.push(ingredient)
        chef.fridge.save()
        .then(function(data) {
            res.redirect(`/chefs/${chef._id}/fridge`);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Error occurred while Adding Ingredient to Fridge."
            });
        });
    }
}