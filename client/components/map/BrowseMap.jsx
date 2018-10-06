import React, { Component } from 'react';
import { connect } from 'react-redux';

// 'spinner' library
const Spinner = require('react-spinkit');

import { getPosts } from '../../actions/general_posts';

import request from 'superagent';

class BrowseMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGettingRegion: true,
            browserLocation: {}, // parsed and set w browser's geolocation
            suburb: ''
        };
    };

    componentDidMount() {
        if (navigator.geolocation) { // if the browser has geolocation available, request the user's position...

            const { dispatch } = this.props;
            dispatch(getPosts());

            navigator.geolocation.getCurrentPosition(pos => {
                
                const browserLocation = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };

                // reverse-geocoding (through google maps api) with browser's lat & long
                request
                    .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${browserLocation.lat},${browserLocation.lng}&key=${apiKey}`)
                    .then(res => {
                        const suburb = res.body.results[1].address_components[2].long_name; // 'sublocality'

                        this.setState({
                            browserLocation,
                            suburb,
                            isGettingRegion: false // stops map from rendering w out necessary information
                        });

                        document.title = `${this.state.suburb} Community Map - leads`;
                    })
            });
        };
    };

    render() {
        const { general_posts } = this.props.general_posts;
        const { browserLocation, isGettingRegion, suburb } = this.state;

        return (
            <div className="hero is-fullheight relative">
                {
                    isGettingRegion && (
                        <div className="loader-container">
                            <Spinner name="ball-spin-fade-loader" />
                        </div>
                    )
                }

                { !isGettingRegion && (
                <div className="map-container">
                    <div className="container map-title">
                        <h1 className="title">Leads in <b>{suburb}</b></h1>
                    </div>
                        
                </div>
            )}
            </div>
        );
    };
};

const mapStateToProps = ({ general_posts }) => {
    return {
        general_posts
    };
};

export default connect(mapStateToProps)((BrowseMap));