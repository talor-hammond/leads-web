// setup:
const env = require('./test-environment')

// db methods to be tested:
import {
    getGeneralPosts
} from '../../../server/db/general_posts'

// mock-imports:
import {
    getGeneralPostsKeys
} from './mocks'

let testDb = null
beforeEach(() => { // initialising before each test...
    testDb = env.getTestDb()
    return env.initialise(testDb)
})
afterEach(() => { // destroying the connection; clean-slate
    return env.cleanup(testDb)
})

// ********************************************************** TESTS ********************************************************** //

test('getGeneralPosts returns the correct length of data', () => {
    return getGeneralPosts(testDb)
        .then(postsArray => {
            expect(postsArray).toHaveLength(3)
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