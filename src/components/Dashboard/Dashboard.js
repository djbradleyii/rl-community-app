import React from 'react';
import UserTeamRequests from '../UserTeamRequests/UserTeamRequests';
import UserTrades from '../UserTrades/UserTrades';
import Inventory from '../Inventory/Inventory';
import './Dashboard.css';

export default class Dashboard extends React.Component{
    render(){
        return(
            <section className="dashboard">
                <UserTrades />
                <UserTeamRequests />
                <Inventory />
            </section>
        );
    }
}