// grabbing all our relevant db functions:
const posts = require('../../../server/db/posts')
const comments = require('../../../server/db/comments')

const env = require('./test-environment')

// testDb setup:
let testDb = null
beforeEach(() => { // initialising before each test...
    testDb = env.getTestDb()
    return env.initialise(testDb)
})
afterEach(() => { // destroying the connection; clean-slate
    return env.cleanup(testDb)
})

// TESTS
test('getPosts returns the correct array of data; length', () => {
    return posts.getPosts(testDb)
        .then(postsArray => {
            expect(postsArray).toHaveLength(1)
        })
})

test('getPostByPostId gets a post obj by an id', () => {
    return posts.getPostByPostId(1, testDb)
        .then(post => {
            expect(post).toBeTruthy()
            expect(post.post_id).toBe(1)
        })
})