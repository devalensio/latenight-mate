const express = require('express');
const router = express.Router()
const models = require('../models')

router.get('/', function (req, res) {
  models.User.findAll({
    order: [
      'id']
    }).then(data => {
    res.render('users/user', {data_user: data})
  })
})

router.get('/add', function (req, res) {
  res.render('users/add-user')
})

router.post('/add', function (req, res) {
  let obj = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
  }
  // console.log(obj);
  models.User.create(obj).then(data => {
    res.redirect('/users')
  })
})

router.get('/edit/:id', function (req, res) {
  models.User.findById(req.params.id).then(data => {
    res.render('users/edit-user', {data_user: data})
  })
})

router.post('/edit/:id', function (req, res) {
  let obj = {
    username : req.body.username,
    password : req.body.password,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age
  }
  models.User.update(obj,{
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/users')
  })
})

router.get('/delete/:id', function (req, res) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/users')
  })
})



module.exports = router
