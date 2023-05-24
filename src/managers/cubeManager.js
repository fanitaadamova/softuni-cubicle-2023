const uniqid = require('uniqid');
const cubes = [
    {
        id: uniqid(),
        name: 'Gan356 Air SM',
        description: 'Gan356 Air SM is the most popular cube in US.',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
        difficultyLevel: 3

    },
    {
        id: uniqid(),
        name: 'Eco-Dark is very dificulty for completing.',
        description: 'Eco-Dark',
        imageUrl: 'https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg',
        difficultyLevel: 6
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

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

exports.getOne = (cubId) => cubes.find(x => x.id == cubId);

exports.create = (cubData) => {
    const newCube = {
        id: uniqid(),
        ...cubData
    }
    cubes.push(newCube);

    return newCube;
}