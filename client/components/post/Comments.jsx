import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { addCommentRequest } from '../../actions/comments'

// components
import Comment from './Comment'

class Comments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ''
        }

        this.updateCommentData = this.updateCommentData.bind(this)
    }

    updateCommentData(e) {
        this.setState({ content: e.target.value })
    }

    submit(e) {
        e.preventDefault()

        const { dispatch, auth, general_posts } = this.props

        // grabbing the stuff we need from places (state; redux + react)
        const { content } = this.state
        const { user_id } = auth.user
        const { post_id } = general_posts.general_posts

        const comment = {
            content,
            user_id,
            post_id
        }

        dispatch(addCommentRequest(comment, 'general_posts', post_id))
        this.refs.commentInput.value = ''
    }

    render() {
        const { comments, auth } = this.props
        // const { user_name } = auth.user // auth.user obj is null when no one is signed-in
        // TODO: conditional for user comments section depending on whether user is signed in or not; only renders for signed-in users

        return (
            <div className="comments">
                {
                    comments.map((comment, i) => {
                        return (
                            <Comment
                                key={i}
                                id={comment.comment_id}
                                content={comment.content}
                                postId={comment.post_id}
                                userId={comment.user_id}
                                username={comment.user_name}
                                published={comment.published}
                            />
                        )
                    })
                }
                
                { auth.user ? 
                (
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-96x96">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                        <strong>{auth.user.user_name}</strong>
                    </figure>
                    <div className="media-content">
                        <div className="field">
                            <p className="control">
                                <textarea onChange={(e) => this.updateCommentData(e)} ref="commentInput" className="textarea" placeholder="Add a comment..."></textarea>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button onClick={(e) => this.submit(e)} className="button">Post comment</button>
                            </p>
                        </div>
                    </div>
                </article>
                )
                :
                (
                <div className="comments-not-signed has-vertically-aligned-content has-text-centered">
                    <p><Link to="/login">Sign-in</Link> or <Link to="/register">register</Link> to join the discussion</p>
                </div>
                )
            }
            </div>
        )
    }
}

const mapStateToProps = ({ auth, general_posts }) => {
    return {
        auth,
        general_posts
    }
}

export default connect(mapStateToProps)(Comments)