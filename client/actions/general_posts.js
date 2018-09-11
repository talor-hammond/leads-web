import request from 'superagent'

// string variables; for consistency:
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const GET_POST_BY_POST_ID = 'GET_POST_BY_POST_ID'
export const GET_POSTS_BY_USER_ID = 'GET_POSTS_BY_USER_ID'

const url = '/api/posts/general'

// client-side; synchronous actions
export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post
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

// asynchronous, server-side actions; redux-thunk
export function getPostsRequest() {
    return dispatch => {
        request
            .get(url)
            .then(res => {
                const posts = res.body
                dispatch(getPosts(posts)) // making the change to client-side state once we have the posts
            })
            .catch(err => {
                if (err) throw err
            })
    }
}

export function addPostRequest(post) {
    return dispatch => {
        request
            .post(url)
            .send(post)
            .then(() => {
                dispatch(getPostsRequest()) // just causes a 'refresh' to client & server once the new post is added
                document.location = "/#/"
            })
            .catch(err => {
                if (err) throw err
            })
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