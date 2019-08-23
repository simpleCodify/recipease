var mongoose = require('mongoose');

// var ingredientSchema = new mongoose.Schema({
//     type: String,
//     name: String,
//     age: Number,
//     amount: Number
// }, {
//     timestamps: true
// })

var recipeSchema = new mongoose.Schema({
    name: String,
    prepTime: Number,
    imgURL: String
    // ingredients: [ingredientSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);