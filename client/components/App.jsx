import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components:
import Login from './Login'
import Register from './Register'
import HomeNav from './HomeNav'
import Home from './Home'
import Footer from './Footer'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route path="/" component={HomeNav} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/" component={Footer} />
    </div>
  </Router>
)

export default App
