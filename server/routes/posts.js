const express = require('express')
const router = express.Router()

const request = require('superagent')

const db = require('../db/posts')

// keys; headers
const key = "AIzaSyD5lA7MpAm577yhx-Y8xh22w69mA3qmVAY"

// Getting posts w user information...
router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      if (err) throw err
    })
})

// Adding a post...
router.post('/', (req, res) => {
  let post = req.body //

  const parsedAddress = post.address.split(' ').join('+') // splitting the string at ' ', and connecting w '+'

  // fetch post.lat, post.long with post.address
  request.get(`https://maps.googleapis.com/maps/api/geocode/json?apiKey=${key}&address=${parsedAddress}`)
    .then(res => {
      const lat = res.body.results[0].geometry.location.lat
      const long = res.body.results[0].geometry.location.long

      post.lat = lat
      post.long = long
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

  db.getPostByPostId(id)
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

  db.getPostsByUserId(id)
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