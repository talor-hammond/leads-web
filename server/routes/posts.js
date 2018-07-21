const express = require('express')
const router = express.Router()

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
  const post = req.body

  db.addPost(post)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      if (err) throw err
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

router.delete('/post/:id', (req, res) => {
  const id = req.params.id

  db.deletePostById(id)
    .then(() => {
      console.log('Deleted?')
      res.sendStatus(200)
    })
    .catch(err => {
      if (err) throw err
    })
})


module.exports = router