const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

//create is same to save
exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getRests = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds } });