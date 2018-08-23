import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'

// Components:
import HomeNav from './HomeNav'
import Home from './Home'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import Post from './Post'
import Browse from './Browse'
import BrowseMap from './BrowseMap'
import Create from './Create'

const App = (props) => {
  return (
    <Router>
      <div className='app-container'>
        <Route path="/" component={HomeNav} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/browse" component={Browse} />
        <Route path="/browse/map" component={BrowseMap} />
        <Route path="/post/:id" component={Post} />
        <Route path="/create" component={Create} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
