import React from 'react'

class GeneralPostTileDescription extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, description } = this.props

        return (
            <div className="description-overlay">
                <p className="title is-4">{description}</p>
            </div>
        )
    }
}

export default GeneralPostTileDescription