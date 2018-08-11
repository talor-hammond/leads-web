import React from 'react'

// components:
import RegisterForm from './RegisterForm'

class Register extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="hero-body">
          <div className="container">
            <div className="column is-4 is-offset-4">
                <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Register
