import React from 'react'

import Comment from './Comment'

class Comments extends React.Component {
    render() {
        return (
            <div className="comments">
                <Comment />
                <Comment />
                <Comment />
                <Comment />

                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64"> 
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="field">
                            <p className="control">
                                <textarea className="textarea" placeholder="Add a comment..."></textarea>
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