import React from 'react'

class Comment extends React.Component {
    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Username</strong>
                            <br />
                            Description, description, description description description description description
                            <br />
                            <br/>
                            <em>Date published</em>
                        </p>
                    </div>
                </div>
            </article>
        )
    }
}

export default Comment