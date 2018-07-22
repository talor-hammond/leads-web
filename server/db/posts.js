const conn = require('./connection')

function getPosts() { // comes with user information, username, user_id, etc.
  return conn('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('posts.id as post_id', 'users.id as user_id', 'users.user_name as username', 'posts.title as title', 'posts.topic as topic', 'posts.description as description' )
}

function addPost(post) {
  return conn('posts')
    .insert(post)
}

function getPostByPostId(id) {
  return conn('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('posts.id as post_id', 'users.id as user_id', 'users.user_name as username', 'posts.title as title', 'posts.description as description' )
    .where('post_id', id)
    .first()
}

function getPostsByUserId(id) {
  return conn('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('posts.id as post_id', 'users.id as user_id', 'users.user_name as username', 'posts.title as title', 'posts.description as description' )
    .where('user_id', id)
}

function deletePostById(id) {
  return conn('posts')
    .where('id', id)
    .del()
}

module.exports = {
  addPost,
  getPosts,
  getPostByPostId,
  deletePostById,
  getPostsByUserId
}