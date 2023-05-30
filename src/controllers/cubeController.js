const router = require('express').Router();

const cubManager = require('../managers/cubeManager')

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

router.get('/details/:cibId', async (req, res) => {
    const cube = await cubManager.getOne(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }
    res.render("details", { cube })
});


module.exports = router;