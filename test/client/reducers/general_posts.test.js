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
    it('returns default state', () => {
        expect(general_posts(undefined, {})).toEqual([])
    })
    it('handles GET_POSTS')
    it('handles GET_POST_BY_POST_ID')
    it('handles GET_POSTS_BY_USER_ID')
    it('handles ADD_POST')
})