import {combineReducers} from 'redux'

import auth from './auth'
import general_posts from './general_posts'
import comments from './comments'

export default combineReducers({
  auth,
  general_posts,
  comments
})
