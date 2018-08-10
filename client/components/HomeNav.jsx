import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

const HomeNav = (props) => {
  return (

    <div>
      <div className="darkline"></div>

      <nav className="navbar">
        <div className="container">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo"><strong>leads</strong></Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/browse" className="has-text-dark">browse</Link>
            </div>

            <div className="navbar-item">
              <Link to="/post" className="has-text-dark">post a lead</Link>
            </div>

            {
              props.auth.isAuthenticated
                ? <div className="navbar-item">
                  <button onClick={(props.dispatch(logoutUser()))}>Logout</button>
                </div>

                : <div className="navbar-item">
                  <Link to="/login" className="has-text-dark">sign-in</Link>
                </div>
            }

            {
              !props.auth.isAuthenticated && (
                <div className="navbar-item">
                  <Link to="/register" className="has-text-dark">register</Link>
                </div>
              )
            }
          </div>
        </div>
      </nav>
    </div>
  )

}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(HomeNav)
