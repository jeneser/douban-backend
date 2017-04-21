
var express = require('express')
var config = require('./config/config')

var app = express()

module.exports = require('./config/express')(app, config)

app.all('/user', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port)
})
