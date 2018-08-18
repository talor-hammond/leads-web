import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'

class Login extends Component {
  componentDidMount() {
    document.title = 'Login - leads'
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
