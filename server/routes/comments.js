const express = require('express')
const router = express.Router()

const request = require('superagent')

const db = require('../db/comments')

// Get comments by post id??
router.get('/comment/:id', (req, res) => {
    const id = req.params.id

    db.getComments(id)
    .then(comments => {
        res.json(comments)
    })
    .catch(err => {
        if (err) console.log(err)
        res.json({message: 'Something went wrong'})
    })
})

// Add a comment
router.post('/comment', (req, res) => {
    let comment = req.body

    db.addComment(comment)
    .then(comment => {
        console.log('Firing!', comment)
        res.sendStatus(200)
    })
    .catch(err => {
        if (err) console.log(err)
        res.json({message: 'Something went wrong'})
    })
})

// Delete a comment by comment id
router.delete('/comment/:id', (req, res) => {
    const id = req.params.id
  
    db.deleteCommentById(id)
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        if (err) throw err
      })
  })


module.exports = router
