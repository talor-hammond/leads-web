// client-side, synchronous action-creators
import {
    getComments,
    addComment
} from '../../../client/actions/comments'

// mocks
import {
    fakeComments,
    fakeComment
} from '../mocks/mocks'

// action types
import {
    GET_COMMENTS,
    ADD_COMMENT 
} from '../../../client/actions/comments'

describe('comments actions', () => {
    it('should create an action to get comments for a post', () => {
        const comments = fakeComments
        
        const expectedAction = {
            type: GET_COMMENTS,
            comments
        }

        expect(getComments(comments)).toEqual(expectedAction)
    })

    it('should create an action to add a comment to a post', () => {
        const comment = fakeComment

        const expectedAction = {
            type: ADD_COMMENT,
            comment
        }

        expect(addComment(comment)).toEqual(expectedAction)
    })
})