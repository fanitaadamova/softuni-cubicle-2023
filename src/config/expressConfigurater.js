const express = require('express');
const path = require('path');

function expressConfigurater(app) {
    //Static middleware, search static file in public folder
    app.use(express.static(path.resolve(__dirname, '../public')));
    //Add third party middleware 
    const bodyParser = express.urlencoded({ extended: false });
    app.use(bodyParser);

}

module.exports = expressConfigurater;