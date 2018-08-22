import comments from '../../../client/reducers/comments'

import {
    GET_COMMENTS,
    ADD_COMMENT
} from '../../../client/actions/comments'

describe('comments reducer', () => {
    it('should return initial state', () => {
        expect(comments(undefined, {})).toEqual([])
    })
})