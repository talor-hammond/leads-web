require('dotenv').config()

const conn = require('./db/connection')

var server = require('./server')
server.set('db', conn)
var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
