const conn = require('./connection')

function joinPostsAndUsers(db) {
    return db('general_posts')
        .join('users', 'general_posts.user_id', 'users.id')
        .select('general_posts.id as post_id', 'category', 'title', 'description', 'address', 'lat', 'lng', 'published', 'user_id', 'user_name', 'email', 'avatar')
}

function getGeneralPosts(testDb) { // comes with relevant user data
    const db = testDb || conn

    return joinPostsAndUsers(db)
}

function getGeneralPostsByUserId(id, testDb) {
    const db = testDb || conn

    return joinPostsAndUsers(db)
        .where('user_id', id)   
}

function getGeneralPostByPostId(id, testDb) {
    const db = testDb || conn

    return joinPostsAndUsers(db)
        .where('post_id', id)   
}

function addGeneralPost(post, testDb) {
    const db = testDb || conn

    return db('general_posts')
        .insert(post)
}

function deletePostById(id, testDb) {
    const db = testDb || conn

    return db('general_posts')
        .where('id', id)
        .del()
}

module.exports = {
    getGeneralPosts,
    getGeneralPostsByUserId,
    getGeneralPostByPostId,
    addGeneralPost,
    deletePostById
}