const conn = require('./connection')

function getComments (postId) {
    return conn('users')
    .join('comments', 'users.id', 'comments.user_id')
    .select('users.user_name as username', 'comments.content as content', 'comments.published as published')
    // .select('users.user_name as username', 'comments.content as content', 'comments.published as published')
    .where('comments.post_id', postId)
}

function addComment (comment) {
    return conn('comments')
    .insert(comment)
}

function deleteCommentById(id) {
    return conn('comments')
      .where('id', id)
      .del()
  }







module.exports = {
    getComments,
    addComment,
    deleteCommentById
}