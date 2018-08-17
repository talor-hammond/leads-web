const express = require('express')
const router = express.Router()

const request = require('superagent')

const db = require('../db/general_posts')

// keys; headers
const key = "AIzaSyD5lA7MpAm577yhx-Y8xh22w69mA3qmVAY" // google api key

// getting posts w user information attached
router.get('/', (req, res) => {
    return db.getGeneralPosts()
        .then(posts => {
            posts.forEach(post => {
                post.lat = parseFloat(post.lat) // parsing the strings into floats; for location-accuracy down the chain
                post.lng = parseFloat(post.lng)
            })
            res.json(posts)
        })
        .catch(err => {
            if (err) throw err
        })
})

module.exports = router