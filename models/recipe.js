var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    title: String,
    prepTime: Number,
    imgURL: {
        type: String,
        default: "https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg"
    },
    description: {
        type: String,
        default: "Description Placeholder"
    },
    reqIngredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
    instructions: [String],
    chef: {type: mongoose.Schema.Types.ObjectId, ref: "Chef"}
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);