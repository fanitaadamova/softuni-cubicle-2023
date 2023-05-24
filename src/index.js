const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

const PORT = 5000;
//Handlebars confoguration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');
//Add third party middleware 
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);
//Static middleware, search static file in public folder
//app.use(express.static('src/public'))
app.use(express.static(path.resolve(__dirname,'public')))


//Routes
app.get('/', (req, res) => {
    res.render("index")
})

app.listen(PORT, () => console.log(`Server is running ot posrt ${PORT}....`));