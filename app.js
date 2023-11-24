const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/home');
const contactRoutes = require('./routes/contact');
const submit = require('./routes/submit');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/home', adminRoutes);
app.use('/contact', contactRoutes);
app.use('/submit', submit);

app.use((req, res, next)=>{
    res.status(404).send('<h1>page not found</h1>');
})

app.listen(3000);