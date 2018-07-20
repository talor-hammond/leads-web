const express = require('express')
const router = express.Router()

const postsDB = require('../db/posts')

router.get('/', (req, res) => {
  postsDB.getPosts()
    .then(posts => {
      // console.log(posts)
      res.json(posts)
    })
    .catch(err => {
      if (err) throw err
    })
})

router.get('/andusers', (req, res) => {
  postsDB.getPostsWithUsers()
    .then(posts => {
      // console.log(posts)
      res.json(posts)
    })
    .catch(err => {
      if (err) throw err
    })
})

router.post('/', (req, res) => {
  const post = req.body

  postsDB.addPost(post)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      if (err) throw err
    })
})


module.exports = router

// router.post('/', (req, res) => {
//   const post = req.body
//   postsDB.addPost()
//     .then(() => {
//       res.send(200)
//     })
//     .catch(err => {
//       if (err) throw err
//   })  
// })