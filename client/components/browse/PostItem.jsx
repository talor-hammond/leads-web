import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    const { id, title, description, username, address } = props

    return (
        <div className="mini-listing">
            <Link to={`/post/${id}`}>
                <figure className="image is-5by3 image-container">
                    <img src="http://via.placeholder.com/640x360" />
                    <div className="description-overlay">
                        {description}
                    </div>
                </figure>
            </Link>
            <h1 className="listing-title">{title}</h1>
            <span className="address">{address}</span>
            <span className="price"></span>

            <hr className="rule" />

            <p className="username">{username}</p>

        </div>
    )
}

export default PostItem