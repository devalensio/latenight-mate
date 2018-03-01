const models = require('../models');
const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();
const loginChecker = require('../helpers/loginChecker');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');

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
    bcrypt.compare(req.body.password, user.password).then(data => {
      if(data){
        req.session.id = user.id;
        req.session.username = user.username;
        res.redirect(`/users/${user.id}/addgenre`)
      }
    })
  }).catch(error => {
    res.render('auth/login', {session: req.session.username, error})
  })
})

router.get('/register', loginChecker, (req, res) => {
  let error
  res.render('auth/register', {error})
})

router.post('/register', loginChecker, (req, res) => {
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

router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if(error){
      res.send(error)
    } else {
      res.redirect('/auth/login')
    }
  })
})

module.exports = router;
