import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

// Components:
// import Map from './Map'

class BrowseMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialRegion: {}, // parsed and set w browser's geolocation
            posts: [
            { title: 'EDA STUDENT GRADUATION', topic: 'Celebration!', description: 'Bring your friends and family for EDA students presentation and appreciation. There will be nibbles and beer so come along!! 5:30pm 26th July.', lat: -41.2969355, long: 174.7734782, user_id: 1 },
            { title: 'Need Jumper Leads', topic: 'Car Problems', description: 'Got a flat battery, if anyone has any jumper leads and would like to help, let me know.', lat: -41.2963787, long: 174.7688924, user_id: 2 },
            { title: 'BBQ & Chill', topic: 'Event', description: 'MEAT, MEAT, MEAT!!! Come along for the hottest get together in town. Starts at 7pm', lat: -41.2962902, long: 174.772681, user_id: 3 },
            { title: 'Yoga Session', topic: 'Event', description: 'Spiritual yoga session at Waitangi Park. Beginners welcome!. 6am sharp.', lat: -41.2919435, long: 174.7825271, user_id: 4 },
            { title: 'Casual Conversations', topic: 'Socialise', description: 'Free your mind and talk with open minded people. @3pm', lat: -41.2948087, long: 174.7747454, user_id: 5 }]
        }
    }

    mapStyle = {
        height: '80%',
        width: '80%',
        margin: '0 auto'
    }

    // Marker events:
    onMouseoverMarker(props, marker, e) {
        console.log('Props: ', props)
        console.log('Marker: ', marker)
        console.log('e: ', e)
    }

    onClickMarker(props, marker, e) {
        console.log('Props: ', props)
        console.log('Marker: ', marker)
        console.log('e: ', e)
    }

    render() {
        const { initialRegion, posts } = this.state

        return (
            <div className="hero is-fullheight">
                <div className="map-container">
                    <div className="container map-title">
                        <h1 className="title">Leads in <b>Wellington</b></h1>
                    </div>
                    <Map
                        google={window.google}
                        style={this.mapStyle}
                        zoom={17}
                        initialCenter={{
                            lat: -41.300637,
                            lng: 174.801782
                        }}
                    >
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
                                        onClick={this.onClickMarker}
                                    />
                                )
                            })
                        }
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