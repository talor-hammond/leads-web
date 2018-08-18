import {
    GET_POSTS,
    ADD_POST,
    GET_POST_BY_POST_ID,
    GET_POSTS_BY_USER_ID
} from '../actions/general_posts'

export function general_posts(state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            return [...action.posts]
        case ADD_POST:
            return [...state]
        case GET_POST_BY_POST_ID:
            return [...action.post]
        case GET_POSTS_BY_USER_ID:
            return [...action.posts]
        default:
            return state
    }
}