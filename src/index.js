const express = require('express');
const expressConfigurater = require('./config/expressConfigurater');
const handlebarsConfigurater = require('./config/handlebarsConfigurater');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController')

const app = express();

const PORT = 5000;

expressConfigurater(app);
handlebarsConfigurater(app);

app.use(homeController);
app.use('/cubes', cubeController);

app.listen(PORT, () => console.log(`Server is running ot posrt ${PORT}....`));