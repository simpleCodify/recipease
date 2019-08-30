var Chef = require('../models/chef');
var Recipe = require('../models/recipe');
var Ingredient = require('../models/ingredient');

module.exports = {
    show,
    showFridge,
    editFridge,
    addIngredient,
}

function show(req, res) {
    Chef.findById(req.user, (err, chef) => {
        Recipe.find({ chef: chef._id }, (err, recipes) => {
            res.render('chefs/show', {
                user: chef,
                chef,
                recipes,
                fridge: chef.fridge,
                title: 'Recipease - My Recipease'
            });
        });
    });
}

// function show(req, res) {
//     Chef.findById(req.params.id, (err, chef) => {
//         Recipe.find({ chef: chef._id }, (err, recipes) => {
//             res.render('chefs/show', {
//                 user: chef,
//                 chef,
//                 recipes,
//                 fridge: chef.fridge
//             });
//         });
//     });
// }

function showFridge(req, res) {
    Chef.findById(req.params.id)
    .populate('fridge')
    .exec((err, chef) => {
            res.render('chefs/fridge', {
                chef,
                user: chef,
                title: 'Recipease - My Fridge'
            });
        });
}

function editFridge(req, res) {
    Chef.findById(req.params.id, (err, chef) => {
        Ingredient.find({}, (err, ingredient) => {
            res.render("chefs/edit", {
                chef,
                ingredient,
                user: chef,
                title: 'Recipease - Fridge Stock'
            });
        });
    });
}

function addIngredient(req, res) {
    console.log("Request is in the ADDING INGREDIENT phase")
    console.log("This is the req.params.id: ", req.user)
    Chef.findById(req.user, (err, chef) => {
        console.log("REQUEST is in the PUSHING INGREDIENTS phase")
        chef.fridge = req.body.ingredients,
        chef.save(err => {
            console.log("Error while Saving CHEF", err)
            res.redirect(`/chefs/${chef._id}/fridge`)
        });
    });
}


