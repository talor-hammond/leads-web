import React from 'react'
import { Link } from 'react-router-dom'

// components:
import FirstInfo from './homeComponents/FirstInfo'
import SecondInfo from './homeComponents/SecondInfo'

const Home = (props) => {
    return (
        <div>
            <FirstInfo />
        </div>
    )
}

export default Home