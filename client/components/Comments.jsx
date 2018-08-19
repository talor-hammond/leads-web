import React from 'react'

import Comment from './Comment'

class Comments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: ''
        }

        this.updateCommentData = this.updateCommentData.bind(this)
    }

    updateCommentData(e) {
        this.setState({ comment: e.target.value })
    }

    submit(e) {
        e.preventDefault()
    }

    render() {
        const { comments } = this.props

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

                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64"> 
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="field">
                            <p className="control">
                                <textarea onChange={(e) => this.updateCommentData(e)} name="comment" className="textarea" placeholder="Add a comment..."></textarea>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button">Post comment</button>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Comments