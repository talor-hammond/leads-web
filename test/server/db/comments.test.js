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
test('getComments retrieves the correct array of comments', () => {
    return getComments('general_posts', 1, testDb)
        .then(comments => {
            expect(comments).toHaveLength(3)

            comments.forEach(comment => {
                expect(comment.post_id).toBe(1)
            })
        })
})

test('addComment adds a comment to the right post', () => {
    return addComment(fakeComment, testDb)
        .then(ids => {
            const expected = 'number'
            const actual = typeof ids[0]

            expect(actual).toBe(expected)
            
            return getComments('general_posts', 1, testDb)
                .then(comments => {
                    expect(comments).toHaveLength(4)
                })
        })
})

test('updateComment updates the right comment w new content', () => {
    return updateComment(2, fakeUpdatedComment, testDb)
        .then(affectedRows => {
            expect(affectedRows).toBe(1)
        })
})