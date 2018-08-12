import React, { Component } from 'react'

// components:
import RegisterForm from './RegisterForm'

class Register extends Component {

  render() {
    return (
      <section className="section">
        <div className="hero-body">
          <div className="container">
            <div className="column is-5 is-offset-3">
                <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Register
