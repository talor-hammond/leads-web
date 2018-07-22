const express = require('express')
const router = express.Router()

const request = require('superagent')

const db = require('../db/posts')

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
  let post = req.body

  // fetch the address with post.latitude, post.longitude
  request.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${post.lat}%2C${post.long}&sensor=true`)
    .then(res => {
      const address = res.body.results[0].formatted_address
      post.address = address
    })
    .then(() => {
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