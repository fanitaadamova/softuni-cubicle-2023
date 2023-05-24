const express = require('express');
const expressConfiguarater = require('./config/expressConfiguarater');
const handlebarsConfiguarater = require('./config/handlebarsConfiguarater');

const app = express();
const PORT = 5000;

expressConfiguarater(app);
handlebarsConfiguarater(app);


//Routes
app.get('/', (req, res) => {
    res.render("index")
})

app.listen(PORT, () => console.log(`Server is running ot posrt ${PORT}....`));