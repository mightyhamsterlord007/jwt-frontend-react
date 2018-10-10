import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser , clearCurrentProfile } from '../../actions';

class Navbar extends Component {

  onLogoutClick = (e) => {
    e.preventDefault();

    this.props.clearCurrentProfile();
    this.props.logoutUser();
    
    window.location.href = 'http://localhost:3000/login';


  }

  render() {
    
    const { isAuthenticated, user } = this.props.auth;
    const userLoggedIn = (
      <ul style={{listStyle: 'none'}}>
      <li>
          <Link style={{marginRight: 10, textDecoration: 'none'}} to='/dashboard'>{user.username}</Link>
          <a style={{marginRight: 10, textDecoration: 'none'}} href="" onClick={this.onLogoutClick}>logout</a>
      </li>
    </ul>
    )

    const logInOrRegister = (
      <ul style={{listStyle: 'none'}}>
        <li>
            <Link style={{marginRight: 10, textDecoration: 'none'}} to='/register'>Register</Link>
            <Link style={{marginRight: 10, textDecoration: 'none'}} to='/login'>Login</Link>
        </li>
      </ul>
    );

    return (
      <nav>
          {isAuthenticated ? userLoggedIn : logInOrRegister}
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);