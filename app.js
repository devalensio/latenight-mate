const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const models = require('./models');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'hahahahihihihehehe',
  cookie: {
    maxAge: 3600000
  }
}));

const index = require('./routes/index');
const places = require('./routes/places');
const user = require('./routes/user');
const genre = require('./routes/genre');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/places', places);
app.use('/users', user);
app.use('/genres', genre);
app.use('/auth', auth);

app.listen(3000, console.log('AYE AYE CAPTAIN!'))
