import React from 'react'
import { Link } from 'react-router-dom'

// actions:
import { registerUserRequest } from '../actions/register'

class Register extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      user_name: '',
      password: '',
      confirm_password: ''
    }

    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateDetails(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit(e) {
    e.preventDefault()
    e.target.reset()
    const { user_name, password, confirm_password } = this.state

    if (password == confirm_password) {
      this.props.dispatch(registerUserRequest({ user_name, password }))
    } else {
      console.log('errrrrrrrror, passwords don\'t match')
    }
  }

  render() {
    return (
      <section className="hero is-light is-fullheight is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-dark">leads</h3>
              <p className="subtitle has-text-grey">
                <Link to="/"><em><b>browse</b></em>, or sign-up here</Link>
              </p>

              <div className="box">

                <form method="post">

                  <div className="field">
                    <div className="control">
                      <input onChange={this.updateDetails} name="email" className="input is-medium" type="email" placeholder="Email" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input onChange={this.updateDetails} name="first_name" className="input is-medium" placeholder="First name" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input onChange={this.updateDetails} name="last_name" className="input is-medium" placeholder="Last name" />
                    </div>
                  </div>


                  <div className="field">
                    <div className="control">
                      <input onChange={this.updateDetails} name="username" className="input is-medium" placeholder="Username" />
                    </div>
                  </div>

                  <input className="button is-info is-medium is-fullwidth" type="submit" value="Sign-up" />

                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Register
