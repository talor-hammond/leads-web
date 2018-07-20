const conn = require('./connection')


function addPost (post) {
  return conn('posts')
    .insert(post)
}

function getPosts () {
  return conn('posts')
  
}

function getPostsWithUsers () {
  return conn('users')
    .join('posts', 'users.id', 'posts.user_id')
    // .select('posts.id as id', 'posts.title as Title', 'users.user_name as User')
}

 



module.exports = {
  addPost,
  getPosts,
  getPostsWithUsers
}










