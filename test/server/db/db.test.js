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
test('Test suite is running', () => {
    expect(true).toBe(true)
})