import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

const Nav = (props) => {
  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <Link to="/">Home</Link>
        {props.auth.isAuthenticated
          ? <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
          : <div className="columns nav-menu">
            <Link className="nav-item" to="/login">Login</Link>&nbsp;
            <Link className="nav-item" to="/register">Register</Link>
          </div>
        }
      </div>

    </div>
  )

  <header>
  <div className="darkline"></div>
  <nav className="navbar">
      <div className="container">
          <div className="navbar-brand">
              <a href="#" className="navbar-item logo"><strong>leads</strong></a>
          </div>

          <div className="navbar-end">
              <div className="navbar-item">
                  <a href="./browse.html" className="has-text-dark">browse</a>
              </div>
              <div className="navbar-item">
                  <a href="#" className="has-text-dark">post a lead</a>
              </div>
              <div className="navbar-item">
                  <a href="./signup.html" className="has-text-dark">sign-in</a>
              </div>
          </div>
      </div>
  </nav>
</header>

}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(Nav)
