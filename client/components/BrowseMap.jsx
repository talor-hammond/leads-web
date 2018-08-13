import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

// Components:
// import Map from './Map'

import request from 'superagent'

class BrowseMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGettingRegion: true,
            browserLocation: {}, // parsed and set w browser's geolocation
            mapTitle: '',
            posts: [
                    { title: 'EDA STUDENT GRADUATION', topic: 'Celebration!', description: 'Bring your friends and family for EDA students presentation and appreciation. There will be nibbles and beer so come along!! 5:30pm 26th July.', lat: -41.2969355, long: 174.7734782, user_id: 1 },
                    { title: 'Need Jumper Leads', topic: 'Car Problems', description: 'Got a flat battery, if anyone has any jumper leads and would like to help, let me know.', lat: -41.2963787, long: 174.7688924, user_id: 2 },
                    { title: 'BBQ & Chill', topic: 'Event', description: 'MEAT, MEAT, MEAT!!! Come along for the hottest get together in town. Starts at 7pm', lat: -41.2962902, long: 174.772681, user_id: 3 },
                    { title: 'Yoga Session', topic: 'Event', description: 'Spiritual yoga session at Waitangi Park. Beginners welcome!. 6am sharp.', lat: -41.2919435, long: 174.7825271, user_id: 4 },
                    { title: 'Casual Conversations', topic: 'Socialise', description: 'Free your mind and talk with open minded people. @3pm', lat: -41.2948087, long: 174.7747454, user_id: 5 }
                ],
            showingInfoWindow: false
        }
    }

    // Lifecycle --
    componentDidMount() {
        if (navigator.geolocation) { // if the browser has geolocation available, request the user's position...
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords

                const browserLocation = {
                    lat: coords.latitude,
                    lng: coords.longitude
                }

                // fetch mapTitle w lat and long from google maps api, .then...
                request
                    .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${browserLocation.lat},${browserLocation.lng}&key=${apiKey}`)
                    .then(res => {
                        const suburb = res.body.results[1].formatted_address

                        const mapTitle = suburb.split(',')[0] // grabbing just the first word out of the suburb result

                        return mapTitle
                    }).then(mapTitle => {
                        this.setState({
                            browserLocation,
                            mapTitle,
                            isGettingRegion: false // stops map from rendering w out necessary information
                        })
                    })
            })
        }
    }

    // Class variables
    mapStyle = {
        height: '80%',
        width: '80%',
        margin: '0 auto'
    }

    // Marker events:
    onMouseoverMarker(props, marker, e) { // TODO
        
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            showingInfoWindow: true
        })
    }

    render() {
        const { browserLocation, posts, isGettingRegion, mapTitle } = this.state

        return (
            <div className="hero is-fullheight">
                            {
                                !isGettingRegion && (
                <div className="map-container">
                    <div className="container map-title">
                        <h1 className="title">Leads in <b>{mapTitle}</b></h1>
                    </div>
                        <Map
                            google={window.google}
                            style={this.mapStyle}
                            zoom={17}
                            initialCenter={browserLocation}
                        >
                        <Marker
                            title='Your current location'
                            position={browserLocation}
                        />
                            {
                                posts.map(post => {
                                    return (
                                        <Marker
                                            id={post.id}
                                            title={post.title}
                                            description={post.description}
                                            name={'SOMA'}
                                            position={{ 
                                                lat: post.lat,
                                                lng: post.long
                                            }}
                                            onMouseover={this.onMouseoverMarker}
                                            onClick={this.onMarkerClick}
                                        />
                                    )
                                })
                            }
                        </Map>
                </div>
                        )
                    }
            </div>
        )
    }
}

const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
)

const apiKey = 'AIzaSyD5lA7MpAm577yhx-Y8xh22w69mA3qmVAY'

export default GoogleApiWrapper({
    apiKey,
    LoadingContainer
})(BrowseMap)