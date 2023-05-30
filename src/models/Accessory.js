const mongoose = require('mongoose');

//create Shema
const accessorySchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
});

//create Model 
const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;