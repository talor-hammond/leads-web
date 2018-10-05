import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/logout';

const Nav = (props) => {
  const { isAuthenticated } = props.auth;

  return (
    <div>
      <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="dropdown navigation">
        <div className="container">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo"><strong>leads</strong></Link>

            {/* Mobile / tablet 'burger' */}
            <span className="navbar-burger burger" data-target="navMenu" onClick={() => toggleBurger()}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navMenu" className="navbar-menu is-dark">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/browse/" className="has-text-light">browse</Link>
              </div>

              <div className="navbar-item">
                <Link to="/browse/map" className="has-text-light">community map</Link>
              </div>

              <div className="navbar-item">
                <Link to="/create" className="has-text-light">post a lead</Link>
              </div>

              {
                isAuthenticated ? (
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                      <Link to="/browse/map" className="has-text-light">{this.props.auth.user.user_name}</Link>
                    </div>

                    <div className="navbar-dropdown">
                      <Link to="/browse/map" className="navbar-item">your profile</Link>
                      <hr className="navbar-divider" />
                      <Link to="#" onClick={() => props.dispatch(logoutUser())} className="navbar-item">signout</Link>
                    </div>

                  </div>
                )
                  : (
                    <div className="navbar-item">
                      <Link to="/login" className="has-text-light">sign-in</Link>
                    </div>
                  )
              }

              {
                !isAuthenticated && (
                  <div className="navbar-item">
                    <Link to="/register" className="has-text-light">register</Link>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


function toggleBurger() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector(`#${burger.dataset.target}`); // i.e. the el w id: navMenu

  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  nav.classList.toggle('dark-background');
}

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps)(Nav);
