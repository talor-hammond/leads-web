import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getPostByPostIdRequest } from '../actions/general_posts'

// components
import Comments from './Comments'

class Post extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const { dispatch } = this.props

        dispatch(getPostByPostIdRequest(id))
    }

    render() {
        const { title, address, description, post_id, published, email, user_name } = this.props.general_posts[0]

        return (
            <section className="hero pin">
                <div className="container">

                    <h1 className="title">{title}</h1>
                    <h2 className="subtitle">{address}</h2>

                    <div className="columns">
                        <div className="column is-4">
                            <div className="card description-card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-96x96">
                                                <img src="http://via.placeholder.com/96x96" />
                                            </figure>
                                        </div>

                                        <div className="media-content">
                                            <p className="title is-4 no-padding">{user_name}</p>
                                            <p className="subtitle is-6">Rating</p>
                                        </div>
                                    </div>

                                    <div className="content description-etc">
                                        <h1 className="title is-size-6">Description</h1>
                                        <p>{description}</p>
                                    </div>

                                    <br />

                                    <span className="published">{published}</span>

                                </div>
                            </div>
                        </div>

                        <div className="column is-8">
                            <figure className="image featuredImage">
                                <img src="http://via.placeholder.com/640x360" alt="Featured Image" />
                            </figure>
                        </div>
                    </div>

                    <hr />

                    <div className="column is-10 is-offset-2">
                        <h1 className="title is-4">Discussion</h1>
                        <Comments />
                    </div>

                </div>
            </section>
        )
    }
}

const mapStateToProps = ({ general_posts }) => {
    return {
        general_posts
    }
}

export default connect(mapStateToProps)(Post)