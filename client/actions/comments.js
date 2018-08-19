import request from 'superagent'

// string variables; for consistency:
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

const url = '/api/comments'

// client-side, synchronous actions
function getComments(comments) {
    return {
        type: GET_COMMENTS,
        comments
    }
}