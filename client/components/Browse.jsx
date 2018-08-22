import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getPostsRequest } from '../actions/general_posts'

// components
import PostItem from './PostItem'

class Browse extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(getPostsRequest())
    }

    render() {
        const { general_posts } = this.props
        console.log(general_posts)

        return (
            <section className="content">
                <div className="container">
                    <h1 className="title">Refine your search</h1>

                    <div className="wrapper">
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