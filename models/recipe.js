var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    title: String,
    prepTime: Number,
    imgURL: String,
    reqIngredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);