var mongoose = require('mongoose');

var chefSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleID: String,
    fridge: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', unique: true}],
    favorites: Array
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Chef', chefSchema);