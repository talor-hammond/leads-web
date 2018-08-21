// client-side, synchronous actions
import {
    getPosts,
    addPost,
    getPostByPostId,
    getPostsByUserId
} from '../../../client/actions/general_posts'

// mocks
import {
    fakePosts
} from './mocks'

// action types
import {
    GET_POSTS,
    ADD_POST,
    GET_POST_BY_POST_ID,
    GET_POSTS_BY_USER_ID
} from '../../../client/actions/general_posts'

describe('general_posts actions', () => {
    it('should create an action to get all posts', () => {
        const posts = fakePosts
        const expectedAction = {
            type: GET_POSTS,
            posts
        }

        expect(getPosts(posts)).toEqual(expectedAction)
    })
})