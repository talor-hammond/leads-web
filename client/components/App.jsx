import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'

// Components:
import Nav from './Nav'
import Home from './home/Home'
import Footer from './Footer'
import Login from './login/Login'
import Register from './register/Register'
import Post from './post/Post'
import Browse from './browse/Browse'
import BrowseMap from './map/BrowseMap'
import Create from './create/Create'

const App = (props) => {
  return (
    <Router>
      <div className='app-container'>
        <Route path="/" component={Nav} />
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
