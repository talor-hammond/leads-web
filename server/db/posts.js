const conn = require('./connection')


function addPost (post) {
  return conn('posts')
    .insert(post)
}

function getPosts () {
  return conn('posts')
}





module.exports = {
  addPost,
  getPosts
}










