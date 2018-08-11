import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {user_name, password} = this.state
    this.props.dispatch(loginUser({user_name, password}))

  }
  render() {
    return (
      <section className="section">
        <div className="hero-body">
          <div className="container">
            <div className="column is-4 is-offset-4">
                <LoginForm />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect()(Login)
