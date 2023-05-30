const router = require('express').Router();

const cubManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
    res.render("create")
});

router.post('/create', async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel }
        = req.body;

    await cubManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel
    });

    res.redirect('/')
});

router.get('/:cubeId/details', async (req, res) => {
    console.log(req.params.cubeId);
    const cube = await cubManager.getOne(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }
    res.render("details", { cube })
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getAll().lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

module.exports = router;