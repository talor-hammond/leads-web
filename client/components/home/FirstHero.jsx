import React from 'react'
import { Link } from 'react-router-dom'

const FirstHero = () => {
    return (
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6">
                            <h1 className="title is-spaced">Find leads to just about anything in your community.</h1>
                            <h2 className="subtitle">Create and search for leads to jobs, services, community events, and more.</h2>
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

export default FirstHero