const uniqid = require('uniqid');
const cubs = [];

exports.getAll = () => cubs.slice();

exports.create = (cubData) => {
    const newCube = {
        id: uniqid(),
        ...cubData
    }
    cubs.push(newCube);

    return newCube;
}