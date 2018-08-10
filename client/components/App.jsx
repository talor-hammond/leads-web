import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import HomeNav from './HomeNav'
import Home from './Home'

const App = () => (
  <Router>
    <div className='app-container has-text-centered'>
      <Route path="/" component={HomeNav} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  </Router>
)

export default App
