const express = require('express');
const expressConfigurater = require('./config/expressConfigurater');
const handlebarsConfigurater = require('./config/handlebarsConfigurater');
const routes = require('./routes');

const app = express();

const PORT = 5000;

expressConfigurater(app);
handlebarsConfigurater(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running ot posrt ${PORT}....`));