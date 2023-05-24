const express = require('express');
const expressConfigurater = require('./config/expressConfigurater');
const handlebarsConfigurater = require('./config/handlebarsConfigurater');

const app = express();
const PORT = 5000;

expressConfigurater(app);
handlebarsConfigurater(app);


//Routes
app.get('/', (req, res) => {
    res.render("index")
})

app.listen(PORT, () => console.log(`Server is running ot posrt ${PORT}....`));