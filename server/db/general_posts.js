const conn = require('./connection')

function getGeneralPosts(testDb) { // comes with relevant user data
    const db = testDb || conn

    return db('general_posts')
        .join('users', 'general_posts.user_id', 'users.id')
        .select('general_posts.id as post_id', 'category', 'title', 'description', 'address', 'lat', 'lng', 'published', 'user_id', 'user_name', 'email', 'avatar')
}