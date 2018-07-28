const express = require('express')
const router = express.Router()

const db = require('../db/messages')

router.get('/:id', (req, res) => {
    const id = req.params.id

    db.getMessagesByReceiver(id)
        .then(messages => {
            res.json(messages)
        })
        .catch(err => {
            if (err) throw err
        })
})

router.post('/', (req, res) => {
    const message = req.body

    db.sendMessage(message)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            if (err) throw err
        })
})

module.exports = router