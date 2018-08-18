import React, { Component } from 'react'
import { connect } from 'react-redux'

import LeadCard from './LeadCard'

class Browse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const { dispatch } = this.props
    }

    render() {
        console.log(this.props)
        const { posts } = this.state

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
                            posts.map(post => {
                                return (
                                    <LeadCard
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