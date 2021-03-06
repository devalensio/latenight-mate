const express = require('express');
const router = express.Router()
const models = require('../models')
const sessionChecker = require('../helpers/sessionChecker');

router.get('/', sessionChecker, function (req, res) {
  models.Genre.findAll({
    order: [
      'id']
    }).then(data => {
    console.log(JSON.parse(JSON.stringify(data)));
    res.render('genres/genre', {data_genre: data})
  })
})

router.get('/add', sessionChecker, function (req, res) {
  res.render('genres/add-genre')
})

router.post('/add', sessionChecker, function (req, res) {
  let obj = {
    name: req.body.name
  }
  models.Genre.create(obj).then(data => {
    res.redirect('/genres')
  })
})

router.get('/edit/:id', sessionChecker, function (req, res) {
  models.Genre.findById(req.params.id).then(data => {
    res.render('genres/edit-genre', {data_genre: data})
  })
})

router.post('/edit/:id', sessionChecker, function (req, res) {
  let obj = {
    name: req.body.name
  }
  models.Genre.update(obj,{
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/genres')
  })
})

router.get('/delete/:id', sessionChecker, function (req, res) {
  models.Genre.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/genres')
  })
})

module.exports = router
