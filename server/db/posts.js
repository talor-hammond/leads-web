const conn = require('./connection')

function getPosts(testDb) { // comes with user information, username, user_id, etc.
  const db = testDb || conn

  return db('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('posts.id as post_id', 'users.id as user_id', 'users.user_name as username', 'posts.address as address', 'posts.lat as lat', 'posts.long as long', 'posts.title as title', 'posts.topic as topic', 'posts.description as description')
    .orderBy('post_id', 'desc')
}

function addPost(post, testDb) {
  const db = testDb || conn

  return db('posts')
    .insert(post)
}

function getPostByPostId(id, testDb) {
  const db = testDb || conn

  return db('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('posts.id as post_id', 'users.id as user_id', 'users.user_name as username', 'posts.title as title', 'posts.description as description')
    .where('post_id', id)
    .first()
}

function getPostsByUserId(id, testDb) {
  const db = testDb || conn

  return db('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('posts.id as post_id', 'users.id as user_id', 'users.user_name as username', 'posts.title as title', 'posts.description as description')
    .where('user_id', id)
}

function deletePostById(id, testDb) {
  const db = testDb || conn

  return db('posts')
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