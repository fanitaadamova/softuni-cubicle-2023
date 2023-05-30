const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();

    //TODO: use mongoose to filter in db
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

exports.create = async (cubData) => {
    const cube = new Cube(cubData);
    await cube.save();

    return cube;
}