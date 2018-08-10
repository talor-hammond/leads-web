import React from 'react'
import { Link } from 'react-router-dom'

const FirstInfo = () => {
    return (
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6">
                            <h1 className="title is-spaced">Lorem ipsum dolor sit amet consectetur.</h1>
                            <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla nam omnis delectus quam
                    ea suscipit voluptate adipisci odit porro.</h2>
                            <p className="control">
                                <Link to="/register" className="button cta is-info">Get started for free</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstInfo