import React, { Component } from 'react'
import { connect } from 'react-redux'

// 'spinner' library
const Spinner = require('react-spinkit')

// actions
import { getPosts } from '../../actions/general_posts'

// components
import PostItem from './PostItem'

class Browse extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(getPosts())
    }

    render() {
        const { general_posts, isFetching } = this.props.general_posts

        return (
            <section className="content">
                <div className="container">
                    <h1 className="title">Refine your search</h1>

                    <div className="wrapper relative">
                        {
                            isFetching && (
                                <div className="loader-container">
                                    <Spinner name="ball-spin-fade-loader" fadeIn="none" />
                                </div>
                            )
                        }

                        {
                            Array.isArray(general_posts) && general_posts.map(post => {
                                return (
                                    <PostItem
                                        key={post.post_id}
                                        id={post.post_id}
                                        title={post.title}
                                        description={post.description}
                                        username={post.user_name}
                                        address={post.address}
                                    />
                                )
                            })
                        }
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

export default connect(mapStateToProps)(Browse)