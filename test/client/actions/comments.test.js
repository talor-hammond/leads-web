// client-side, synchronous action-creators
import {
    getComments,
    addComment
} from '../../../client/actions/comments'

// mocks
// import {

// } from './mocks'

// action types
import {
    GET_COMMENTS,
    ADD_COMMENT 
} from '../../../client/actions/comments'

describe('comments actions', () => {
    it('should create an action to get comments for a post', () => {
        const comments = [
            {

            }
        ]
        
        const expectedAction = {
            type: GET_COMMENTS,
            comments
        }

        expect(getComments(comments)).toEqual(expectedAction)
    })
})