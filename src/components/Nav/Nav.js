import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component{
    render(){
        return(
            <ul className="top-nav-container">
                <Link to={`/signin`} className="nav-link"><li>Sign in</li></Link>
                <Link to={`/register`} className="nav-link"><li>Register</li></Link>
                <Link to={`/dashboard/:userId`} className="nav-link"><li>Dashboard</li></Link>
                <Link to={`/add-inventory-item`} className="nav-link"><li>Add Inventory</li></Link>
                <Link to={`/teams`} className="nav-link"><li>Team Board</li></Link>
                <Link to={`/signout`} className="nav-link"><li>Logout</li></Link>
            </ul>
        );
    }
}