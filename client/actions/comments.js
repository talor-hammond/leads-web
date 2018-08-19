import request from 'superagent'

// string variables; for consistency:
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT' // should just 'refresh'
export const DELETE_COMMENT = 'DELETE_COMMENT' // ditto

const url = '/api/comments'

// client-side, synchronous actions
function getComments(comments) {
    // console.log('and the client: ' + comments)
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
            .get(`${url}/${table}/${postId}`)
            .then(res => {
                const comments = res.body
                // console.log('Here\'s the comments from the server: ', comments)
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
            .post(url)
            .send(comment)
            .then(() => {
                dispatch(getCommentsRequest(table, postId))
            })
            .catch(err => {
                if (err) throw err
            })
    }
}

export function updateCommentRequest(newContent, id, table, postId) {
    return dispatch => {
        request
            .put(`${url}/${id}`)
            .send(newContent)
            .then(() => {
                dispatch(getCommentsRequest(table, postId))
            })
            .catch(err => {
                if (err) throw err
            })
    }
}

export function deleteCommentRequest(id, table, postId) {
    return dispatch => {
        request
            .delete(`${url}/${id}`)
            .then(() => {
                dispatch(getCommentsRequest(table, postId))
            })
            .catch(err => {
                if (err) throw err
            })
    }
}