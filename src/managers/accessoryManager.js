const Accessory = require('../models/Accessory');

//create is same to save
exports.create = (accessoryData) => Accessory.create(accessoryData);