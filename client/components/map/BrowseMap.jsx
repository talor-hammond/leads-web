import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

import { getPostsRequest } from '../../actions/general_posts'

import request from 'superagent'

class BrowseMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGettingRegion: true,
            browserLocation: {}, // parsed and set w browser's geolocation
            suburb: '',
            showingInfoWindow: false
        }
    }

    // Lifecycle --
    componentDidMount() {
        if (navigator.geolocation) { // if the browser has geolocation available, request the user's position...

            const { dispatch } = this.props

            dispatch(getPostsRequest())

            navigator.geolocation.getCurrentPosition(pos => {
                // console.log(pos)

                const coords = pos.coords

                const browserLocation = {
                    lat: coords.latitude,
                    lng: coords.longitude
                }

                // reverse-geocoding (through google maps api) with browser's lat & long
                request
                    .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${browserLocation.lat},${browserLocation.lng}&key=${apiKey}`)
                    .then(res => {
                        // console.log(res.body)

                        const suburb = res.body.results[2].formatted_address.split(',')[0] // grabbing just the first word out of the suburb result

                        return suburb
                    }).then(suburb => { // wait for that return value before setting state...
                        this.setState({
                            browserLocation,
                            suburb,
                            isGettingRegion: false // stops map from rendering w out necessary information
                        })
                    }).then(() => {
                        document.title = `${this.state.suburb} Community Map - leads`
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

    // // Marker events: TODO
    // onMouseoverMarker(props, marker, e) {
        
    // }

    // onMarkerClick(props, marker, e) {
    //     this.setState({
    //         showingInfoWindow: true
    //     })
    // }

    render() {
        const { general_posts } = this.props
        const { browserLocation, isGettingRegion, suburb } = this.state

        return (
            <div className="hero is-fullheight">
                { !isGettingRegion && (
                <div className="map-container">
                    <div className="container map-title">
                        <h1 className="title">Leads in <b>{suburb}</b></h1>
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
                                general_posts.map(post => {
                                    return (
                                        <Marker
                                            key={post.post_id}
                                            title={post.title}
                                            description={post.description}
                                            name={'SOMA'}
                                            position={{ 
                                                lat: post.lat,
                                                lng: post.lng
                                            }}
                                            onMouseover={this.onMouseoverMarker}
                                            onClick={this.onMarkerClick}
                                        />
                                    )
                                })
                            }
                        </Map>
                </div>
            )}
            </div>
        )
    }
}

const apiKey = 'AIzaSyD5lA7MpAm577yhx-Y8xh22w69mA3qmVAY'

const mapStateToProps = ({ general_posts }) => {
    return {
        general_posts
    }
}

export default connect(mapStateToProps)(
    GoogleApiWrapper({apiKey})
    (BrowseMap)
)