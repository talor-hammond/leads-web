import React from 'react'

import moment from 'moment'

class Comment extends React.Component {
    

    formatDate(published) {
        let oldDate = moment(published)

        let fromNow = oldDate.fromNow()
        console.log(fromNow)
        return fromNow
    }

    componentDidMount() {
        this.formatDate(this.props.published)
    }

    render() {
        const { id, content, published, username } = this.props

        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                    {username}
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            {content}
                            <br />
                            <br/>
                            <em>{this.formatDate(published)}</em>
                        </p>
                    </div>
                </div>
            </article>
        )
    }
}

export default Comment