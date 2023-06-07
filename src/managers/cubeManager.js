const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();

    //TODO: use mongoose to filter in DB
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result

};

exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

exports.create = async (cubData) => {
    const cube = new Cube(cubData);
    //може да не е async await, по подобие на accessory Manager-a - return cube.save(); 
    await cube.save();

    return cube;
};

exports.update = (cubeId, cubData) => Cube.findByIdAndUpdate(cubeId, cubData);

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {
    //return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } });
       const cube = await Cube.findById(cubeId);
       cube.accessories.push(accessoryId);

      return await cube.save();
};