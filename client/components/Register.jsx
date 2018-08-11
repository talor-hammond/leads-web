import React from 'react'

// components:
import RegisterForm from './RegisterForm'

class Register extends React.Component {

  render() {
    return (
      <section className="hero is-light is-fullheight is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
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
