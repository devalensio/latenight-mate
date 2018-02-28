const express = require('express');

const app = express()

const bodyParser = require('body-parser')

const user = require('./routes/user')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', user)

app.listen(3000, console.log('hahahahahihihi'))
