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

// Adding a post...
router.post('/', (req, res) => {
    let post = req.body

    const parsedAddress = post.address.split(' ').join('+') // splitting the string at ' ', and connecting w '+'

    // fetch post.lat, post.lng with post.address from google maps api
    request.get(`https://maps.googleapis.com/maps/api/geocode/json?apiKey=${key}&address=${parsedAddress}`)
        .then(res => {
            const lat = res.body.results[0].geometry.location.lat.toString()
            const lng = res.body.results[0].geometry.location.lng.toString()

            console.log(lat, lng)

            post.lat = lat
            post.lng = lng
        })
        .then(() => { // once we've retrieved latitude and longitude from google maps api
            db.addPost(post)
                .then(() => {
                    console.log('Firing... ', post)
                    res.sendStatus(200)
                })
                .catch(err => {
                    if (err) throw err
                })
        })

})

// Getting a post, by the post's id
router.get('/post/:id', (req, res) => {
    const id = req.params.id

    db.getGeneralPostByPostId(id)
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            if (err) throw err
        })
})

// Getting all posts, from a particular user id
router.get('/user/:id', (req, res) => {
    const id = req.params.id

    db.getGeneralPostsByUserId(id)
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            if (err) throw err
        })
})

// Deleting a post by post id
router.delete('/post/:id', (req, res) => {
    const id = req.params.id

    db.deletePostById(id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            if (err) throw err
        })
})

module.exports = router