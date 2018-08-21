// client-side, synchronous actions
import {
    getPosts,
    addPost,
    getPostByPostId,
    getPostsByUserId
} from '../../../client/actions/general_posts'

// mocks
import {
    fakePosts,
    fakePost
} from './mocks'

// action types
import {
    GET_POSTS,
    ADD_POST,
    GET_POST_BY_POST_ID,
    GET_POSTS_BY_USER_ID
} from '../../../client/actions/general_posts'

describe('general_posts actions', () => {
    it('should create an action to return all posts', () => {
        const posts = fakePosts
        
        const expectedAction = {
            type: GET_POSTS,
            posts
        }

        expect(getPosts(posts)).toEqual(expectedAction)
    })

    it('should create an action to add a post', () => {
        const post = fakePost

        const expectedAction = {
            type: ADD_POST,
            post
        }

        expect(addPost(post)).toEqual(expectedAction)
    })

    it('should create an action that returns a single post', () => {
        const post = fakePosts.find(post => post.post_id === 1)
        
        const expectedAction = {
            type: GET_POST_BY_POST_ID,
            post
        }

        expect(getPostByPostId(post)).toEqual(expectedAction)
    })
})