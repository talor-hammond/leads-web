var hash = require('../auth/hash')
const conn = require('./connection')

function createUser (user, db) {
  const { email, user_name, password } = user

  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      console.log({ email, user_name, password }, hash)

      if (err) reject(err)
      db('users')
        .insert({ email, user_name, hash })
        .then(user_id => resolve(user_id))
    })

  })
}

function userExists (user_name, db) {
  console.log({user_name});
  return db('users')
    .where('user_name', user_name)
    .first()
    .then(user => !!user)
}

function getUserByName (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUserByUsername (user_name) {
  return conn('users')
  .where('user_name', user_name)
  .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserByUsername
}

