import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getPostsRequest } from '../actions/general_posts'

// components
import LeadCard from './LeadCard'
import GeneralPostTile from './GeneralPostTile'

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

        return (
            <section className="content">
                <div className="container">
                    <h1 className="title">Refine your search</h1>

                    <div className="tile is-ancestor posts-container">
                    {
                        general_posts.map(post => {
                            return (
                                <GeneralPostTile
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