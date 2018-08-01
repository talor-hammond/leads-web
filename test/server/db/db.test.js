// setup:

import { // 'posts' methods
    getPostByPostId,
    getPosts,
    getPostsByUserId,
    addPost,
    deletePostById
} from '../../../server/db/posts'

import { // 'comments' methods
    getComments,
    addComment,
    deleteCommentById
} from '../../../server/db/comments'

const env = require('./test-environment')

// mock-imports:
import {
    fakePost
} from './mocks'

// testDb setup:
let testDb = null
beforeEach(() => { // initialising before each test...
    testDb = env.getTestDb()
    return env.initialise(testDb)
})
afterEach(() => { // destroying the connection; clean-slate
    return env.cleanup(testDb)
})

// ********************************************************** TESTS ********************************************************** //

// 1 - 'posts' table:
test('getPosts returns the correct array of data; length', () => {
    return getPosts(testDb)
        .then(postsArray => {
            expect(postsArray).toHaveLength(1)
        })
})

// TODO: test join w join keys @getPosts

test('getPostByPostId gets a post obj by an id', () => {
    return getPostByPostId(1, testDb)
        .then(post => {
            expect(post).toBeTruthy()
            expect(post.post_id).toBe(1)
        })
})

test('getPostsByUserId returns an array of a users\' posts', () => {
    return getPostsByUserId(1, testDb)
        .then(postsArray => {
            const expected = true
            const actual = Array.isArray(postsArray)

            expect(actual).toBe(expected)
            expect(postsArray).toHaveLength(1)
        })
})

test('addPost returns ids of type: number', () => {
    return addPost(fakePost, testDb)
        .then(ids => {
            const expected = 'number'
            const actual = typeof ids[0]

            expect(actual).toBe(expected)
        })
})

test('deletePost does its job', () => {
    return deletePostById(1, testDb)
        .then(id => { // returns the id of the deleted post... 
            const expected = 1
            const actual = id

            expect(actual).toBe(expected)
        })
})

// 2 - 'comments' table
test('getComments returns an array', () => {
    return getComments(1, testDb)
        .then(comments => {
            const expected = true
            const actual = Array.isArray(comments)

            expect(actual).toBe(expected)
        })
})

test('getComments returns the correct length of data', () => {
    return getComments(1, testDb)
        .then(comments => {
            console.log(comments)
        })
})