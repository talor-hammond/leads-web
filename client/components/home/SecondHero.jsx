import React from 'react'
import { Link } from 'react-router-dom'

const SecondHero = () => {
    return (
        <section className="hero is-medium is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6 is-offset-6">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam, explicabo asperiores quaerat
                                odio corrupti, veritatis tenetur temporibus velit vitae qui? At, eos corrupti ipsam debitis ex
                            a fuga reprehenderit.</p>
                            <br />
                            <p className="bold">See leads around you with the community map.</p>
                            <br />
                            <p className="control">
                                <Link to="/browse/map" className="button cta is-info">View leads in your area</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondHero