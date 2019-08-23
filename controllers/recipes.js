var Recipe = require('../models/recipe');

module.exports = {
    findAll,
    // findOne,
    // create,
    // update,
    // delete: deleteOne
};

function findAll(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Recipe.find(modelQuery)
    .sort(sortKey).exec(function(err, recipes) {
        if (err) return next(err);
        // Passing search values, name & sortKey, for use in the EJS
        res.render('recipes/index', { 
            recipes,
            user: req.user,
            name: req.query.name, 
            sortKey 
        });
    });
}

// function findOne(req, res, next) {
//     res.render('')
// }

// function create(req, res) {
    // if (!req.body.content) {
    //     return res.status(400).send({
    //         message: "Recipe content can not be empty!"
    //     });
    // }
    // var recipe = new Recipe({
    //     title: req.body.title,
    //     prepTime: req.body.prepTime,
    //     ingredients: req.body.ingredients
    // });
    // recipe.save()
    // .then(function(data) {
    //     res.send(data);
    // }).catch(function(err) {
    //     res.status(500).send({
    //         message: err.message || "Error occurred while creating the Recipe."
    //     });
    // });
// }

// function update(req, res, next) {

// }

// function deleteOne(req, res, next) {

// }

