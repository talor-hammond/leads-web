import React from 'react'

import { Link } from 'react-router-dom'

class GeneralPostTileDescription extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, description } = this.props

        return (
            <div className="description-overlay">
                <p className="title is-4 is-spaced">"{description}"</p>
                <Link to={`/post/${id}`} className="subtitle">View full post</Link>
            </div>
        )
    }
}

export default GeneralPostTileDescription