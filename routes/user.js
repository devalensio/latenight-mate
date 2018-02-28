const express = require('express');
const router = express.Router()
const models = require('../models')

router.get('/', function (req, res) {
  models.User.findAll({
    order: [
      'id'],
      include:{
        model: models.Genre
      }
    }).then(data => {
      // console.log(data );
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

router.get('/:id_user/addgenre', function (req, res) {
  // console.log(typeof req.params.id_user);
  let user_id = +req.params.id_user
  models.User.findById(user_id).then(data1 => {
    models.Genre.findAll().then(data2 => {
      let data = JSON.parse(JSON.stringify(data1))
      let test = JSON.parse(JSON.stringify(data2))
      res.render('users/add-genre', {data_user: data1, data_genre: data2})
    })
  })
})

router.post('/:id_user/addgenre', function (req, res) {
  let obj = {
    userId: req.params.id_user,
    genreId: req.body.id_genre
  }
  // console.log(obj);
  models.UserGenre.create(obj).then(data_conj => {
    models.Genre.findById(req.body.id_genre,{
      include: [{
        model: models.Place
      }]
    }).then(data => {
      let test = JSON.parse(JSON.stringify(data))
      res.redirect(`/users/add-genre?genreId=${req.body.id_genre}`)
    })
  })
})

router.get('/add-genre',function (req, res) {
  let num_genre = +req.query.genreId
  models.Genre.findById(num_genre, {
    include: [{
      model: models.Place
    }]
  }).then(data => {
    let test = JSON.parse(JSON.stringify(data))
    console.log(test);
    res.render('users/show-places', {data_genre: data})
  })
})




module.exports = router
