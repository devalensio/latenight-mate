const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const models = require('./models');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const places = require('./routes/places.js');
app.use('/places', places);

app.listen(3000, console.log('AYE AYE CAPTAIN!'))
