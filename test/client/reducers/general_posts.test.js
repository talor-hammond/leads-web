import general_posts from '../../../client/reducers/general_posts'

import {
    GET_POSTS,
    GET_POST_BY_POST_ID,
    GET_POSTS_BY_USER_ID,
    ADD_POST
} from '../../../client/actions/general_posts'

import {
    fakePosts,
    fakePost
} from '../mocks/mocks'

describe('general_posts reducer', () => {
    it('handles GET_POSTS', () => {
        const action = {
            type: GET_POSTS,
            posts: fakePosts
        }    

        expect(general_posts(undefined, action)).toEqual(action.posts)
    })

    it('handles GET_POST_BY_POST_ID', () => {
        const post = fakePosts.find(post => post.post_id == 1)
        
        const action = {
            type: GET_POST_BY_POST_ID,
            post
        }

        expect(general_posts(undefined, action)).toEqual(action.post)
    })

    it('handles GET_POSTS_BY_USER_ID', () => {
        const posts = fakePosts.filter(post => post.user_id == 1)

        const action = {
            type: GET_POSTS_BY_USER_ID,
            posts
        }

        expect(general_posts(undefined, action)).toEqual(action.posts)
    })

    it('handles ADD_POST' ,() => {
        const post = fakePost

        const action = {
            type: ADD_POST,
            post
        }

        expect(general_posts(undefined, action)).toEqual([])
    })
})