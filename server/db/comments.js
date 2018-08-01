const conn = require('./connection')

function getComments (postId, testDb) {
    const db = testDb || conn

    return db('users')
    .join('comments', 'users.id', 'comments.user_id')
    .select('users.user_name as username', 'comments.content as content', 'comments.published as published')
    .where('comments.post_id', postId)
    // .then(comments => {
    //     console.log(comments)
    // })
}

function addComment (comment, testDb) {
    const db = testDb || conn

    return db('comments')
    .insert(comment)
}

function deleteCommentById(id, testDb) {
    const db = testDb || conn

    return db('comments')
      .where('id', id)
      .del()
  }

module.exports = {
    getComments,
    addComment,
    deleteCommentById
}

// getComments(1)