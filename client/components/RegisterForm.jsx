import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// actions:
import { registerUserRequest } from '../actions/register'

class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
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
        const { email, user_name, password, confirm_password } = this.state

        if (password == confirm_password) {
            this.props.dispatch(registerUserRequest(user))
        } else {
            console.log('passwords do not match lol')
        }
    }

    render() {
        return (
            <div className="box">
                <h3 className="title is-4 is-spaced has-text-dark">Get started with a free account</h3>
                <p className="subtitle is-6 has-text-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate exercitationem sequi repellat minus vitae.
                </p>

                <form>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                            <input onChange={this.updateDetails} className="input" name="email" type="email" />
                            <div className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Username <span className="extra-text">(displayed on your profile)</span></label>
                        <div className="control has-icons-left">
                            <input onChange={this.updateDetails} className="input" name="user_name" type="text" />
                            <div className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                            <input onChange={this.updateDetails} className="input" name="password" type="password" />
                            <div className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Confirm password</label>
                        <div className="control has-icons-left">
                            <input onChange={this.updateDetails} className="input" name="confirm_password" type="password" />
                            <div className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                    </div>

                    <input className="button is-info is-medium is-fullwidth" type="submit" value="Sign-up" />

                </form>

            </div>
        )
    }
}

export default RegisterForm