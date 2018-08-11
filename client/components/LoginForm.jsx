import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Actions:
import { loginUser } from '../actions/login'

class LoginForm extends Component {

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
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        e.preventDefault()

        const { user_name, password } = this.state

        const user = {
            user_name,
            password
        }

        this.props.dispatch(loginUser(user))
    }

    render() {

        return (
            <div>
                <div className="box">
                    <div className="login-title">
                        <div className="has-text-centered login-logo">
                            <h3 className="title is-4 logo has-text-dark">leads</h3>
                        </div>
                        <div className="login-subtitle">
                            <p className="subtitle is-6">Haven't made an account yet? <Link to="/register">Sign-up here</Link></p>
                        </div>
                    </div>

                    <form>

                        <div className="field">
                            <label className="label">Username</label>
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
                            <div className="control">
                                <input className="button is-info is-medium is-fullwidth" onClick={this.submit} type="submit" value="Login" />
                            </div>
                        </div>

                    </form>

                </div>

                <div className="terms-text has-text-centered">Forgotten your password? <Link to="/#">Reset it here</Link></div>
            </div>
        )

    }

}

export default connect()(LoginForm)