import React, { Component } from 'react'

import { connect } from 'react-redux'

class CreateForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="content">
                <div className="container">

                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control has-icons-left">
                            <input className="input" type="text" placeholder="e.g. 'Broke my window smh, help plz'" />
                            <div className="icon is-small is-left">
                                <i className="fa fa-map-pin"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Add a description</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Describe it?????"></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="region" className="label">Select region:</label>
                        <div className="control has-icons-left">
                            <div className="select">
                                <select>
                                    <option>Wellington</option>
                                    <option>Auckland</option>
                                </select>
                            </div>
                            <div className="icon is-small is-left">
                                <i className="fa fa-location-arrow"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Address</label>
                        <div className="control has-icons-left">
                            <input className="input" type="text" placeholder="Start typing an address..." />
                            <div className="icon is-small is-left">
                                <i className="fa fa-map-marker"></i>
                            </div>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text">Cancel</button>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default CreateForm