var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
    category: String,
    name: String,
    life: Number,
    amount: Number,
    thumbnail: String,
    expiringSoon: Boolean
});

module.exports = mongoose.model('Ingredient', ingredientSchema);

