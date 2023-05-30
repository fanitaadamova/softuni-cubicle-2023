const mongoose = require('mongoose');

//create Shema
const cubeShema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
});

//create Model 
const Cube = mongoose.model('Cube', cubeShema);

module.exports = Cube;
