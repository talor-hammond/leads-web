import React, { Component } from 'react'

// Components:
// import Map from './Map'

class BrowseMap extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section className="section">
                <div className="container">
                    {/* parse 'area' from google maps api w browsers' lat & long */}
                    <h1 className="title">Leads in your area...</h1> 
                </div>
            </section>
        )

    }
}

export default BrowseMap