var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
    category: String,
    name: {
        type: String,
        unique: true
    },
    life: Number,
    thumbnail: String,
    expiringSoon: Boolean
});

module.exports = mongoose.model('Ingredient', ingredientSchema);

