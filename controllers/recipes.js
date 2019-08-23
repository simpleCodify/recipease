var Recipe = require('../models/recipe');

module.exports = {
    index
};

function index(req, res, next) {
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


// function index(req, res) {
//     res.render('./recipes/index', {
//         user: req.user,
//         name: req.query.name    
//     });
// }