import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// actions:
import { registerUserRequest } from '../actions/register'

class RegisterForm extends Component {

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

        if (password == confirm_password) this.props.dispatch(registerUserRequest({ user_name, password })) // 'else' is handled through html attr / bulma
    }

    render() {
        return (
            <div className="box">
                <h3 className="title has-text-dark">leads</h3>
                <p className="subtitle has-text-dark">
                    <Link to="/"><em><b>browse</b></em>, or sign-up here</Link>
                </p>

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
        )
    }
}

export default RegisterForm