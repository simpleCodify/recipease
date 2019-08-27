var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    title: String,
    prepTime: Number,
    imgURL: String,
    reqIngredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
    instructions: Array,
    chef: {type: mongoose.Schema.Types.ObjectId, ref: "Chef"}
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);