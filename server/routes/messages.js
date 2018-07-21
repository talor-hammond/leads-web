const express = require('express')
const router = express.Router()

const db = require('../db/messages')

router.get('/:id', (req, res) => { // this route grabs posts -- with user information attached
    const id = req.params.id // CHECK: best to attach id to route params?

    db.getMessagesByReceiver(id)
        .then(messages => {
            // console.log(messages)
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