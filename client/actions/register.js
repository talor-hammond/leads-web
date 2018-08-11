import request from 'superagent'
import { saveUserToken } from '../utils/auth'
import { receiveLogin } from './login'

export function registerUserRequest (user) {
  // console.log(user)
  global.window.localStorage.setItem('fun', 'times') // this needs to set a token doesn't it?
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send(user)
      .end((err, res) => {
        if (err) {
          alert("didn't work")
          console.log({err});
        } else {
          // console.log('res.body.token: ', res.body.token) // token exists here...
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}
