const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const { getDifficultyOptionsViewData } = require('../utils/viewHelpers');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', isAuth, (req, res) => {
    console.log(req.user);

    res.render('cube/create');
});

router.post('/create', isAuth, async (req, res) => {

    const { name,
        description,
        imageUrl,
        difficultyLevel }
        = req.body;

    try {
        await cubeManager.create({
            name,
            description,
            imageUrl,
            difficultyLevel: Number(difficultyLevel),
            owner: req.user._id
        });

        res.redirect('/')

    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.status(404).render('cube/create', { errorMessages });
    }


});

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }

    isOwner = cube.owner?.toString() === req.user?._id;

    res.render("cube/details", { cube, isOwner })
});

router.get('/:cubeId/attach-accessory', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getRests(cube.accessories).lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', isAuth, async (req, res) => {
    const { accessory: accessoryId } = req.body;

    const cubeId = req.params.cubeId;

    try {
        await cubeManager.attachAccessory(cubeId, accessoryId);
    
        res.redirect(`/cubes/${cubeId}/details`);
        
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.status(404).redirect(`/cubes/${cubeId}/details`, { errorMessages });
    }

});

router.get('/:cubeId/delete', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    if (cube.owner.toString() !== req.user._id) {
        return res.redirect('/404');
    }

    const options = getDifficultyOptionsViewData(cube.difficultyLevel);
    res.render('cube/delete', { cube, options });
});

router.post('/:cubeId/delete', isAuth, async (req, res) => {

    await cubeManager.delete(req.params.cubeId);
    res.redirect('/');
});



router.get('/:cubeId/edit', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    if (cube.owner.toString() !== req.user._id) {
        return res.redirect('/404');
    }

    const options = getDifficultyOptionsViewData(cube.difficultyLevel);

    res.render('cube/edit', { cube, options });
});

router.post('/:cubeId/edit', isAuth, async (req, res) => {
    const cubData = req.body;

    try {
        await cubeManager.update(req.params.cubeId, cubData),
    
            res.redirect(`/cubes/${req.params.cubeId}/details`);    
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.status(404).redirect(`/cubes/${req.params.cubeId}/details`, { errorMessages });
    }

});


module.exports = router;