const express = require('express')
const router = express.Router()

const request = require('superagent')

const db = require('../db/comments')

// Get comments by post id??
router.get('/:table/:postId', (req, res) => {
    const { table, postId } = req.params

    db.getComments(table, postId)
        .then(comments => {
            res.json(comments)
        })
        .catch(err => {
            if (err) throw err
        })
})

// Adding a comment
router.post('/', (req, res) => {
    const comment = req.body

    db.addComment(comment)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            if (err) throw err
        })
})

// Updating a comment
router.put('/:id', (req, res) => {
    const id = req.params.id
    const content = req.body.content

    db.updateComment(id, content)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            if (err) throw err
        })
})

// Delete a comment by comment id
router.delete('/:id', (req, res) => {
    const id = req.params.id

    db.deleteComment(id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            if (err) throw err
        })
})


module.exports = router
