const conn = require('./connection')

function getComments(table, postId, testDb) {
    const db = testDb || conn

    return db('comments')
        .join('users', 'users.id', 'comments.user_id')
        .join(table, `${table}.id`, 'comments.post_id') // in future, will let me feed other categories of posts into the query.
        .select('comments.id as comment_id', 'comments.user_id as user_id', 'post_id', 'content', 'comments.published as published')
        .where('comments.post_id', postId)
}

function addComment(comment, testDb) {
    const db = testDb || conn

    return db('comments')
        .insert(comment)
}

function updateComment(id, content, testDb) {
    const db = testDb || conn

    return db('comments')
        .where('id', id)
        .update({
            content
        })
}

function deleteComment(id, testDb) {
    const db = testDb || conn

    return db('comments')
        .where('id', id)
        .del()
}

module.exports = {
    getComments,
    addComment,
    updateComment,
    deleteComment
}