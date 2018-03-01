const models = require('../models');
const express = require('express');
const router = express.Router();
const sessionChecker = require('../helpers/sessionChecker');

router.get('/', sessionChecker, (req, res) => {
  models.Place.findAll({
    order: ['name']
  }).then(places => {
    res.render('places/places', {places})
  })
})

router.get('/add', sessionChecker, (req, res) => {
  res.render('places/add_place')
})

router.post('/add', sessionChecker, (req, res) => {
  models.Place.create({
    name: req.body.name,
    address: req.body.address,
    priceRange: req.body.priceRange
  }).then(() => {
    res.redirect('/places')
  }).catch(error => {
    res.send(error)
  })
})

router.get('/:id/edit', sessionChecker, (req, res) => {
  models.Place.findById(req.params.id).then(places => {
    res.render('places/edit_place', {places})
  })
})

router.post('/:id/edit', sessionChecker, (req, res) => {
  models.Place.update({
    name: req.body.name,
    address: req.body.address,
    priceRange: req.body.priceRange
  },{
    where: {id: req.params.id}
  }).then(() => {
    res.redirect('/places')
  }).catch(error => {
    res.send(error)
  })
})

router.get('/:id/delete', sessionChecker, (req, res) => {
  models.Place.destroy({where: {id: req.params.id}
  }).then(() => {
    res.redirect('/places')
  })
})

module.exports = router;
