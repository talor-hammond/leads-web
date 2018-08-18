import {combineReducers} from 'redux'

import auth from './auth'
import general from './general_posts'

export default combineReducers({
  auth,
  general
})
