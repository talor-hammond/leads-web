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

// API:
server.use('/api/auth', require('./routes/auth'))
server.use('/api/posts/general', require('./routes/general_posts'))
server.use('/api/comments', require('./routes/comments'))
server.use('/api/users', require('./routes/users'))
server.use('/api/messages', require('./routes/messages'))

module.exports = server
