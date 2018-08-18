import React from 'react'

import GeneralPostTileDescription from './GeneralPostTileDescription'

const GeneralPostTile = (props) => {
    const { id, title, description, username, address } = props

    return (
        <div className="tile is-4 is-parent post-container">
            <article className="tile is-child post-tile box">
                <p className="title">{title}</p>
                <p className="subtitle is-4">{address}</p>
                <GeneralPostTileDescription id={id} description={description} />
            </article>
        </div>
    )
}

export default GeneralPostTile