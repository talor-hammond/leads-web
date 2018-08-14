import React, { Component } from 'react'

class LeadCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, description, username, address } = this.props

        return (
            <div className="miniListing">
                <figure className="image is-5by3">
                    <img src="http://via.placeholder.com/640x360" />
                </figure>
                <p>
                    <span className="address">{address}</span> |
                        <span className="price">$99</span>
                </p>
                <p className="listingTitle">{title}</p>
                <p className="username">{username}</p>

            </div>
        )
    }
}

export default LeadCard