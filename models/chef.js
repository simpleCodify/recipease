var mongoose = require('mongoose');

var chefSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleID: String,
    fridge: {
        invIngredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]
    }
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Chef', chefSchema);