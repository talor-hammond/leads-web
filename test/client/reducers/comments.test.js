import comments from '../../../client/reducers/comments'

import {
    GET_COMMENTS,
    ADD_COMMENT
} from '../../../client/actions/comments'

import {
    fakeComments
} from '../mocks/mocks'

describe('comments reducer', () => {
    it('should return initial state', () => {
        expect(comments(undefined, {})).toEqual([])
    })

    it('should handle GET_COMMENTS', () => {
        const action = {
            type: GET_COMMENTS,
            comments: fakeComments
        }

        expect(comments(undefined, action)).toEqual(fakeComments)
    })
})