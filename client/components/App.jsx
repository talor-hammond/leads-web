import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// import { connect } from 'react-redux'

// Components:
import HomeNav from './HomeNav'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import BrowseMap from './BrowseMap'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Route path="/" component={HomeNav} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/browse/map" component={BrowseMap} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  )
}

export default App
