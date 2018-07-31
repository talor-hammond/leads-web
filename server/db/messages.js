const conn = require('./connection')

function getMessagesByReceiver(id, testDb) { // review how messages table should be arranged
    const db = testDb || conn

    return db('messages')
        .where('receiver_id', id) // need to ultimately grab messages between both users, not just received -- i.e. can be on either end
}

function sendMessage(sender_id, receiver_id, content, testDb) {
    const db = testDb || conn

    const message = {
        sender_id,
        receiver_id,
        content
    }

    return db('messages')
        .insert(message)
}



module.exports = {
    getMessagesByReceiver,
    sendMessage
}