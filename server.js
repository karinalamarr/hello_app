const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
//environemnt varibale for port
const port = process.env.PORT || 3000;

//set up view engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');

});

app.get('/about', (req, res) => {
    res.render('about');

});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server s running on port ${port}`);
});