var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// Our api routes:
server.use('/api/auth', require('./routes/auth'))
server.use('/api/posts', require('./routes/posts'))
server.use('/api/messages', require('./routes/messages')) // need this to be private (token) only

module.exports = server
