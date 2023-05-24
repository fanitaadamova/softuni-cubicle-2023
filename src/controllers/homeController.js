const router = require('express').Router();
const cubManager = require('../managers/cubeManager')


router.get('/', (req, res) => {
    const cubes = cubManager.getAll();
    res.render("index", { cubes })
});

router.get('/about', (req, res) => {
    res.render("about")
});

router.get('/create', (req, res) => {
    res.render("create")
});

router.get('/404', (req, res) => {
    res.render("404")
});

module.exports = router;
