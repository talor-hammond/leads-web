import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

// Components:
// import Map from './Map'

class BrowseMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            markers: []
        }
    }

    mapStyle = {
        height: '80%',
        width: '80%',
        margin: '0 auto'
    }

    render() {

        return (
            <div className="hero is-fullheight">
                <div className="map-container">
                    <div className="container map-title">
                        <h1 className="title">Leads in <b>Wellington</b></h1>
                    </div>
                        <Map google={window.google}
                            style={this.mapStyle}
                            zoom={17}
                            initialCenter={{
                                lat: -41.300637,
                                lng: 174.801782
                            }}
                        >
                        </Map>
                </div>
            </div>
        )
    }
}

const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD5lA7MpAm577yhx-Y8xh22w69mA3qmVAY',
    LoadingContainer
})(BrowseMap)