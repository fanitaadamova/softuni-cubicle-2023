const router = require('express').Router();

const cubManager = require('../managers/cubeManager')

router.get('/create', (req, res) => {
    res.render("create")
});

router.post('/create', (req, res) => {
    const { name,
        descriptions,
        imageUrl,
        difficultyLevel }
        = req.body;

    cubManager.create({
        name,
        descriptions,
        imageUrl,
        difficultyLevel
    });

    res.redirect('/')
});

module.exports = router;