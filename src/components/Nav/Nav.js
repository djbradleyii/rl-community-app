import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import TokenService from '../../services/token-service';
import ActiveUserService from '../../services/activeuser-service';

function Nav(props) {
    function handleLogoutClick() {
        TokenService.clearAuthToken();
        ActiveUserService.clearUserData();
        props.history.push('/logout');
    }

  function displayNav() {
    const authorizationStatus = TokenService.hasAuthToken();
    if (authorizationStatus) {
      return (
        <nav role="navigation">
          <ul className="top-nav-container">
            <li><Link to={`/dashboard`} className="nav-link">Dashboard</Link></li>
            <li><Link to={`/add-inventory-item`} className="nav-link">Add Inventory</Link></li>
            <li><Link to={`/teams`} className="nav-link">Team Board</Link></li>
            <li><Link to={`/logout`} className="nav-link" onClick={handleLogoutClick}>Logout</Link></li>
          </ul>
        </nav>
      );
    }
    return (
      <nav role="navigation">
        <ul className="not-logged-in">
          <li><Link to="/signin" className="nav-link">Sign In</Link></li>
          <li><Link to="/register" className="nav-link">Register</Link></li>
        </ul>
      </nav>
    );
  }
  return (
    displayNav()
  );
}

export default Nav;