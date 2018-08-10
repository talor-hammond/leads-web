import React from 'react'

// components:
import FirstHero from './homeComponents/FirstHero'
import SecondHero from './homeComponents/SecondHero'

const Home = (props) => {
    return (
        <div>
            <FirstHero />
            <SecondHero />
        </div>
    )
}

export default Home