var mongoose = require('mongoose');

var chefSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleID: String
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Chef', chefSchema);