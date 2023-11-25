const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const app = express();

const adminRoutes = require('./routes/home');
const contactRoutes = require('./routes/contact');
const submit = require('./routes/submit');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/home', adminRoutes);
app.use('/contact', contactRoutes);
app.use('/submit', submit);

app.use(errorController.get404)

app.listen(3000);