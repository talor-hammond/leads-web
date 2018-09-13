import React, { Component } from 'react'

// 'spinner' library
const Spinner = require('react-spinkit')

// redux, actions
import { connect } from 'react-redux'
import { addPost } from '../../actions/general_posts'

class CreateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            category: 'general_posts',
            region: '',
            description: '',
            address: ''
        }

        this.updateDetails = this.updateDetails.bind(this)
        this.submit = this.submit.bind(this)
    }

    updateDetails(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        e.preventDefault()

        const { dispatch } = this.props
        const { title, category, region, description, address } = this.state
        const { user_id } = this.props.auth.user

        const post = {
            category,
            title,
            address,
            description,
            region,
            user_id
        }

        dispatch(addPost(post))
    }

    render() {
        const { isFetching } = this.props.general_posts
        console.log(isFetching)

        return (
            <section className="content form">
                <div className="container">

                    <h1 className="title">Category > <span className="thin">General</span></h1>

                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control has-icons-left">
                            <input className="input" onChange={this.updateDetails} name="title" type="text" placeholder="e.g. 'Broken window @flat, need help'" />
                            <div className="icon is-small is-left">
                                <i className="fa fa-map-pin"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Add a description</label>
                        <div className="control">
                            <textarea className="textarea" onChange={this.updateDetails} name="description" placeholder="e.g. Need help from someone who knows how to fix windows..."></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="region" className="label">Select region:</label>
                        <div className="control has-icons-left">
                            <div className="select">
                                <select onChange={this.updateDetails} name="region">
                                    <option>...</option>
                                    <option value="wellington">Wellington</option>
                                    <option value="auckland">Auckland</option>
                                </select>
                            </div>
                            <div className="icon is-small is-left">
                                <i className="fa fa-location-arrow"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Address</label>
                        <div className="control has-icons-left">
                            <input className="input" onChange={this.updateDetails} name="address" type="text" placeholder="Start typing an address..." />
                            <div className="icon is-small is-left">
                                <i className="fa fa-map-marker"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button onClick={(e) => this.submit(e)} className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button onClick={() => this.props.top()} className="button is-text">Cancel</button>
                        </div>
                    </div>

                </div>

                {
                    isFetching && (
                        <div className="centered-window">
                            <Spinner name="ball-spin-fade-loader" />
                        </div>
                    )
                }

            </section>
        )
    }
}

const mapStateToProps = ({ auth, general_posts }) => {
    return {
        auth,
        general_posts
    }
}

export default connect(mapStateToProps)(CreateForm)