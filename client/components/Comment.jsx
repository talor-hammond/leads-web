import React from 'react'

class Comment extends React.Component {
    render() {
        const { id, content, published, username } = this.props

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
                            <strong>{username}</strong>
                            <br />
                            {content}
                            <br />
                            <br/>
                            <em>{published}</em>
                        </p>
                    </div>
                </div>
            </article>
        )
    }
}

export default Comment