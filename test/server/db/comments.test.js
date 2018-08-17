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
// import {
    
// } from './mocks'

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
test('getComments retrieves the correct array of comments', () => {
    return getComments('general_posts', 1, testDb)
        .then(comments => {
            console.log(comments)

            expect(comments).toHaveLength(3)

            comments.forEach(comment => {
                expect(comment.post_id).toBe(1)
            })
        })
})