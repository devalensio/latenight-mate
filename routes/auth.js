const models = require('../models');
const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const loginChecker = require('../helpers/loginChecker');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
  res.redirect('/auth/login')
})

router.get('/login', loginChecker, (req, res) => {
  let error
  res.render('auth/login', {session: req.session.username, error})
})

router.post('/login', loginChecker, (req, res) => {
  models.User.findOne({
    where: {
      [Op.or]: [{
        email: req.body.email
      }, {
        username: req.body.email
      }]
    }
  }).then(user => {
    req.session.id = user.id;
    req.session.username = user.username;
    req.session.email = user.email;
    req.session.age = user.age;
    req.session.gender = user.gender;
    res.redirect(`/users/${user.id}/addgenre`);
  }).catch(error => {
    res.render('auth/login', {session: req.session.username, error})
  })
})

router.get('/register', (req, res) => {
  let error
  res.render('auth/register', {error})
})

router.post('/register', (req, res) => {
  models.User.create({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age
  }).then(users => {
    res.redirect('/auth/login')
  }).catch(error => {
    res.render('auth/register', {error})
  })
})

module.exports = router;
