import {
    // for requesting all posts
    POSTS_REQUEST,
    POSTS_SUCCESS,
    POSTS_ERROR,
    // for adding a post
    ADD_POST,
    // fetching post by post id
    GET_POST_BY_POST_ID,
    // fetching post by user id
    GET_POSTS_BY_USER_ID
} from '../actions/general_posts'

const initialState = {
    isFetching: false,
    isPosting: false,
    general_posts: [],
    errorMessage: ''
}

export default function general_posts(state = initialState, action) {
    switch (action.type) {
        // requesting all posts
        case POSTS_REQUEST:
            return {
                isFetching: true,
                isPosting: false,
                general_posts: [],
                errorMessage: ''
            }
        case POSTS_SUCCESS:
            return {
                isFetching: false,
                isPosting: false,
                general_posts: action.posts,
                errorMessage: ''
            }
        case POSTS_ERROR:
            return {
                isFetching: false,
                isPosting: false,
                general_post: [],
                errorMessage: action.error
            }
        // adding a post
        case ADD_POST:
            return [...state]
        case GET_POST_BY_POST_ID:
            return state = action.post
            // return [...action.post]
        case GET_POSTS_BY_USER_ID:
            return [...action.posts]
        default:
            return state
    }
}