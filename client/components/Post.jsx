import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getPostByPostIdRequest } from '../actions/general_posts'

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
        console.log(this.props)

        return (
            <section className="hero pin">
                <div className="container">

                    <h1 className="title">Title of pin / listing</h1>
                    <h2 className="subtitle">
                        <b>region</b> | category</h2>

                    <div className="columns">
                        <div className="column is-8">
                            <figure className="image featuredImage">
                                <img src="http://via.placeholder.com/640x360" alt="Featured Image" />
                            </figure>


                        </div>

                        <div className="column is-4">
                            <div className="card">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-96x96">
                                                <img src="http://via.placeholder.com/96x96" />
                                            </figure>
                                        </div>

                                        <div className="media-content">
                                            <p className="title is-4 no-padding">firstName</p>
                                            <p>username</p>
                                            <p className="subtitle is-6">rating</p>
                                        </div>
                                    </div>

                                    <div className="content description-etc">
                                        <h1 className="title is-size-6">Description</h1>
                                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt amet dolore autem
                                            voluptate nihil cumque perspiciatis, nisi iusto nam vel recusandae reiciendis? Accusamus
                                            facilis, ea, unde quo, nam inventore aliquid aperiam consequatur cum corrupti nulla officiis
                                    nemo sequi qui atque eaque ratione libero fugit laborum porro possimus blanditiis numquam."</p>
                                        <h1 className="title is-size-6">Price<span className="is-pulled-right">$49</span></h1>
                                        <p></p>
                                        <h1 className="title is-size-6">Address</h1>
                                        <p>123 Fake Streetsmh</p>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="columns">
                        <div className="column is-4 is-offset-4">

                        </div>
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