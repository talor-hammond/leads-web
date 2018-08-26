import React from 'react'

// components:
import FirstHero from './FirstHero'
import SecondHero from './SecondHero'

const Home = (props) => {
    document.title = 'leads'

    return (
        <div>
            <FirstHero />
            <SecondHero />
        </div>
    )
}

export default Home