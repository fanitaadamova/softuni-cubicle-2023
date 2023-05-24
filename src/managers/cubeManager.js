const uniqid = require('uniqid');
const cubs = [
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

exports.getAll = () => cubs.slice();

exports.getOne = (cubId) => cubs.find(x => x.id == cubId);

exports.create = (cubData) => {
    const newCube = {
        id: uniqid(),
        ...cubData
    }
    cubs.push(newCube);

    return newCube;
}