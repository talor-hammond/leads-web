import React, { Component } from 'react'

// components:
import RegisterForm from './RegisterForm'

const Register = (props) => {
  document.title = 'Register - leads'

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


export default Register
