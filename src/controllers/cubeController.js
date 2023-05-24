const router = require('express').Router();

const cubManager = require('../managers/cubeManager')

router.get('/create', (req, res) => {
    res.render("create")
});

router.post('/create', (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel }
        = req.body;

    cubManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel
    });

    res.redirect('/')
});

router.get('/details/:cibId', (req, res) => { 
    const cube = cubManager.getOne(req.params.cibId);

    if(!cube){
       return res.redirect('/404');
    }
    res.render("details", {cube})
});


module.exports = router;