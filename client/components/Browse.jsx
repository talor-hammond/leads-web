import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getPostsRequest } from '../actions/general_posts'

// components
import LeadCard from './LeadCard'

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
                    <h1 className="title">Browse</h1>

                    <div className="box">
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input className="input" type="search" placeholder="Search pins in your area..." />
                            </div>
                            <div className="control">
                                <a className="button is-info">Search</a>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper">
                        {
                            general_posts.map(post => {
                                return (
                                    <LeadCard
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