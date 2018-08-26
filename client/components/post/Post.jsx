import React, { Component } from 'react'
import { connect } from 'react-redux'

import moment from 'moment'

// actions
import { getPostByPostIdRequest } from '../../actions/general_posts'
import { getCommentsRequest } from '../../actions/comments'

// components
import Comments from './Comments'

class Post extends Component {
    constructor(props) {
        super(props)
    }

    formatDate(published) {
        let oldDate = moment(published)
        let newDate = oldDate.format('LLLL')
        
        return newDate
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const { dispatch } = this.props
        const { post_id } = this.props.general_posts[id - 1] // definitely needs revision; i.e. the reducer: state is an array of posts here, not the individual one like it should be in the render method

        dispatch(getPostByPostIdRequest(id))
        dispatch(getCommentsRequest('general_posts', post_id))
    }

    render() {
        const { title, address, description, post_id, published, email, user_name } = this.props.general_posts
        const { comments } = this.props

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
                                            <figure className="image is-128x128">
                                                <img src="http://via.placeholder.com/128x128" />
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

                                    <hr />

                                    <span className="published">{this.formatDate(published)}</span>

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

                    <div className="column">
                        <h1 className="title is-4">Discussion</h1>
                        <Comments comments={comments} />
                    </div>

                </div>
            </section>
        )
    }
}

const mapStateToProps = ({ general_posts, comments }) => {
    return {
        general_posts,
        comments
    }
}

export default connect(mapStateToProps)(Post)