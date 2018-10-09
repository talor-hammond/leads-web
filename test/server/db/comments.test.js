// setup:
const env = require('./test-environment')

// db methods to be tested:
import {
    getComments,
    addComment,
    updateComment,
    deleteComment
} from '../../../server/db/comments'

// mock-imports:
import {
    fakeComment,
    fakeUpdatedComment
} from './mocks'

let testDb = null
beforeEach(() => { // initialising before each test...
    testDb = env.getTestDb()
    return env.initialise(testDb)
})
afterEach(() => { // destroying the connection; clean-slate
    return env.cleanup(testDb)
})

// polite reminder: remember to pass the testDb as an argument to your db methods lol

// ********************************************************** TESTS ********************************************************** //
test('getComments for post_id 1 returns an empty array', () => {
    return getComments('general_posts', 1, testDb)
        .then(comments => {
            expect(comments).toHaveLength(0)
        })
})

test.only('addComment adds a comment to the right post', () => {
    return addComment(fakeComment, testDb)
        .then(ids => {
            const expected = 'number'
            const actual = typeof ids[0]

            expect(actual).toBe(expected)

            return getComments('general_posts', 1, testDb)
                .then(comments => {
                    expect(comments).toHaveLength(1)
                })
        })
})

test('updateComment updates the right comment w new content', () => {
    return updateComment(2, fakeUpdatedComment, testDb)
        .then(affectedRows => {
            expect(affectedRows).toBe(1)
        })
})

test('deleteComment does its job', () => {
    return deleteComment(1, testDb)
        .then(affectedRows => {
            expect(affectedRows).toBe(1)

            return getComments('general_posts', 1, testDb)
                .then(comments => {
                    expect(comments).toHaveLength(2)
                })
        })
})