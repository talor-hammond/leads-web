import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

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
                        <div className="map-container">
                            <Map google={window.google}
                                style={{ height: '80%', width: '100%', margin: 'none', left: 0, position: 'absolute' }}
                                zoom={17}
                                initialCenter={{
                                    lat: -41.300637,
                                    lng: 174.801782
                                }}
                                centerAroundCurrentLocation={false}
                            >
                            {/* Markers here */}
                            </Map>
                        </div>
                </div>
            </section>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD5lA7MpAm577yhx-Y8xh22w69mA3qmVAY'
})(BrowseMap)