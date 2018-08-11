var router = require('express').Router()

var {userExists, createUser} = require('../db/users')
var token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  const user = req.body
  userExists(user.user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({message: "User exists"}) // if a user does exist in the database, send a 400
      createUser(user, req.app.get('db')) // otherwise: create a user with the 'user' obj provided
        .then(() => next())
    })
    .catch(err => res.status(500).send({message: err.message}))
}

router.post('/login', token.issue)

module.exports = router
