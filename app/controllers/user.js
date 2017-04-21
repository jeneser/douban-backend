var express = require('express')
var router = express.Router()

var validator = require('validator')
var jwt = require('jsonwebtoken')

module.exports = function (app) {
  app.use('/user', router)
}

// Create user
router.post('/', function (req, res, next) {
  var email = req.body.email
  var pass = req.body.pass
  var name = req.body.name

  // Validator
  if (!validator.isEmpty(email) && !validator.isEmpty(name) &&
      !validator.isEmpty(pass) && validator.isEmail(email) &&
      validator.isLength(name, {min: 2, max: 10})) {
    // Generate token
    var token = jwt.sign({
      user: name,
      email: email,
      exp: Math.floor(Date.now() / 1000) + 100
    }, 'shhhhh')

    res.status(200).send({
      name: name,
      email: email,
      token: token
    })
  } else {
    // Error handle
    res.status(400).send({
      error: 'Missing field'
    })
  }
})

// Get user
router.get('/:name', function (req, res, next) {
  var name = req.params.name
  var token = req.get('Authorization').split(' ')[1]

  // Verify
  jwt.verify(token, 'shhhhh', function (err, decoded) {
    // Error handle
    if (err) {
      res.status(401).send({
        error: 'Invalid token'
      })
    } else {
      res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
      // Authorization sucess return token
      res.status(200).send({
        name: name,
        token: token
      })
    }
  })
})
