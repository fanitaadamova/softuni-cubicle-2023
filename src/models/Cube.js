const mongoose = require('mongoose');

//create Shema
const cubeShema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [5, 'Name is too short!'],
        match: [ /^[A-Za-z0-9\s]+$/, 'Name must be English letters, digits, and whitespaces'],
    },
    description: {
        type: String,
        minLength: [5, 'Description is too short!'],
        match: [ /^[A-Za-z0-9\s]+$/, 'Description must be English letters, digits, and whitespaces'],
    },
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

//create Model 
const Cube = mongoose.model('Cube', cubeShema);

module.exports = Cube;
