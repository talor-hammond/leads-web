// setup:
const env = require('./test-environment')

// db methods to be tested:
import {
    getGeneralPosts,
    getGeneralPostByPostId,
    getGeneralPostsByUserId,
    addGeneralPost,
    deletePostById
} from '../../../server/db/general_posts'

// mock-imports:
import {
    getGeneralPostsKeys,
    fakePost
} from './mocks'

let testDb = null
beforeEach(() => { // initialising before each test...
    testDb = env.getTestDb()
    return env.initialise(testDb)
})
afterEach(() => { // destroying the connection; clean-slate
    return env.cleanup(testDb)
})

// NOTE: remember to pass the testDb as an argument to your db methods lol

// ********************************************************** TESTS ********************************************************** //
test('getGeneralPosts returns an array', () => {
    return getGeneralPosts(testDb)
        .then(posts => {
            const expected = true
            const actual = Array.isArray(posts)

            expect(actual).toBe(expected)
        })
})

test('getGeneralPosts returns the correct length of data', () => {
    return getGeneralPosts(testDb)
        .then(posts => {
            expect(posts).toHaveLength(3)
        })
})

test('getGeneralPosts joins to users w correct keys', () => {
    return getGeneralPosts(testDb)
        .then(posts => {
            posts.forEach(post => {
                expect(Object.keys(post)).toEqual(getGeneralPostsKeys)
            })
        })
})

test('getGeneralPostByPostId returns the right object', () => {
    return getGeneralPostByPostId(1, testDb)
        .then(post => {
            expect(post.post_id).toBe(1)
            expect(post.title).toBe('Car broken down')
        })
})

test('getGeneralPostsByUserId returns the correct array', () => {
    return getGeneralPostsByUserId(2, testDb)
        .then(posts => {
            expect(posts).toHaveLength(2)
            expect(Array.isArray(posts)).toBe(true)
            
            posts.forEach(post => {
                expect(post.user_id).toBe(2)
            })
        })
})

test('addGeneralPost adds a post', () => {
    return addGeneralPost(fakePost, testDb)
        .then(ids => {
            const expected = 'number'
            const actual = typeof ids[0]

            expect(actual).toBe(expected)
            
            return getGeneralPosts(testDb)
                .then(posts => {
                    expect(posts).toHaveLength(4)
                })
        })
})