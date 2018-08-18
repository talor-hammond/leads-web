import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LeadCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, title, description, username, address } = this.props

        return (
            <div className="miniListing">
                <figure className="image is-5by3">
                    <img src="http://via.placeholder.com/640x360" />
                </figure>
                <h1 className="listing-title">{title}</h1>
                    <span className="address">{address}</span>
                    <span className="price"></span>
                    
                    <hr className="rule" />
                
                <p className="username">{username}</p>

            </div>
        )
    }
}

export default LeadCard