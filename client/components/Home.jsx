import React, { Fragment } from 'react'

// components:
import FirstHero from './homeComponents/FirstHero'
import SecondHero from './homeComponents/SecondHero'

const Home = (props) => {
    document.title = 'leads'

    return (
        <Fragment>
            <FirstHero />
            <SecondHero />
        </Fragment>
    )
}

export default Home