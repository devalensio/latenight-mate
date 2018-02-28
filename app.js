const express = require('express');

const app = express()

const bodyParser = require('body-parser')

const user = require('./routes/user')
const genre = require('./routes/genre')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', user)
app.use('/genres', genre)

app.listen(3000, console.log('hahahahahihihi'))
