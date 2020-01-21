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
        <nav role="navigation" className="top-nav-container">
            <Link to={`/dashboard`} className="nav-link"><li>Dashboard</li></Link>
            <Link to={`/add-inventory-item`} className="nav-link"><li>Add Inventory</li></Link>
            <Link to={`/teams`} className="nav-link"><li>Team Board</li></Link>
            <Link to={`/logout`} className="nav-link" onClick={handleLogoutClick}><li>Logout</li></Link>
        </nav>
      );
    }
    return (
      <nav role="navigation" className="not-logged-in">
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </nav>
    );
  }
  return (
    displayNav()
  );
}

export default Nav;