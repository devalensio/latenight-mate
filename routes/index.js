const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/auth/login')
})

module.exports = router;
