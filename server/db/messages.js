const conn = require('./connection')

function getMessagesByReceiver(id) { // review how messages table should be arranged
    return conn('messages')
        .where('receiver_id', id) // need to ultimately grab messages between both users, not just received -- i.e. can be on either end
}

function sendMessage(sender_id, receiver_id, content) {
    const message = {
        sender_id,
        receiver_id,
        content
    }

    return conn('messages')
        .insert(message)
}



module.exports = {
    getMessagesByReceiver,
    sendMessage
}