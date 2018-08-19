import request from 'superagent'

// string variables; for consistency:
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT' // should just 'refresh'
export const DELETE_COMMENT = 'DELETE_COMMENT' // ditto

const url = '/api/comments'

// client-side, synchronous actions
function getComments(comments) {
    return {
        type: GET_COMMENTS,
        comments
    }
}

function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

// asynchronous, redux-thunk actions
export function getCommentsRequest(table, postId) {
    return dispatch => {
        request
            .get(`/${table}/${postId}`)
            .then(comments => {
                dispatch(getComments(comments))
            })
            .catch(err => {
                if (err) throw err
            })
    }
}

export function addCommentRequest(comment, table, postId) {
    return dispatch => {
        request
            .post('/')
            .send(comment)
            .then(() => {
                dispatch(getCommentsRequest(table, postId))
            })
            .catch(err => {
                if (err) throw err
            })
    }
}