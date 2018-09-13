import request from 'superagent'

// string variables; for consistency:
export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_ERROR = 'POSTS_ERROR'

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_ERROR = 'ADD_POST_ERROR'

export const GET_POST_BY_POST_ID = 'GET_POST_BY_POST_ID'
export const GET_POSTS_BY_USER_ID = 'GET_POSTS_BY_USER_ID'

const url = '/api/posts/general'

// GETPOSTS
export function getPosts() {
    return dispatch => {
        dispatch(requestPosts()) // update the state to show isFetching
        return request
            .get(url)
            .then(res => {
                const posts = res.body
                dispatch(receivePosts(posts)) // making the change to client-side state once we have the posts
            })
            .catch(error => {
                if (error) {
                    dispatch(requestPostsError(error))
                }
            })
    }
}

function requestPosts() {
    return {
        type: POSTS_REQUEST
    }
}

function receivePosts(posts) {
    return {
        type: POSTS_SUCCESS,
        posts
    }
}

function requestPostsError(error) {
    return {
        type: POSTS_ERROR,
        error
    }
}

// ADDPOST
export function addPost(post) {
    return dispatch => {
        dispatch(addPostRequest())
        request
            .post(url)
            .send(post)
            .then(() => {
                dispatch(addPostSuccess())
                dispatch(getPostsRequest()) // just causes a 'refresh' to client & server once the new post is added
                document.location = "/#/"
            })
            .catch(err => {
                if (err) {
                    dispatch(addPostError(err))
                }
            })
    }
}

function addPostRequest() {
    return {
        type: 'ADD_POST_REQUEST'
    }
}

function addPostSuccess() {
    return {
        type: 'ADD_POST_SUCCESS'
    }
}

function addPostError(err) {
    return {
        type: 'ADD_POST_ERROR',
        err
    }
}

export function getPostByPostId(post) {
    return {
        type: GET_POST_BY_POST_ID,
        post
    }
}

export function getPostsByUserId(posts) {
    return {
        type: GET_POSTS_BY_USER_ID,
        posts
    }
}

export function getPostByPostIdRequest(id) {
    return dispatch => {
        request
            .get(url + '/post/' + id)
            .then(res => {
                const post = res.body
                dispatch(getPostByPostId(post))
            })
            .catch(err => {
                if (err) throw err
            })
    }
}

export function getPostsByUserIdRequest(id) {
    return dispatch => {
        request
            .get(url + '/user/' + id)
            .then(res => {
                const posts = res.body
                dispatch(getPostsByUserId(posts))
            })
            .catch(err => {
                if (err) throw err
            })
    }
}