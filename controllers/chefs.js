var Chef = require('../models/chef');
var Recipe = require('../models/recipe');
var Ingredient = require('../models/ingredient');

module.exports = {
    show
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
