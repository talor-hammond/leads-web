import React from 'react'

// components:
import HomeNav from './HomeNav'
import FirstHero from './homeComponents/FirstHero'
import SecondHero from './homeComponents/SecondHero'
import Footer from './Footer'

const Home = (props) => {
    return (
        <div>
            <FirstHero />
            <SecondHero />
        </div>
    )
}

export default Home