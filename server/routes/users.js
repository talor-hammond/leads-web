const express = require('express')
const router = express.Router()

const request = require('superagent')

const db = require('../db/users')

router.get('/:username', (req, res) => {
    const user = req.params.username
    db.getUserByUsername(user)
    .then(user => {
        res.json(user)
        console.log(user)
    })
    .catch(err => {
        if (err) throw err
      })
})

module.exports = router

