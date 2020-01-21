import React from 'react';
import UserTeamRequests from '../UserTeamRequests/UserTeamRequests';
import UserTrades from '../UserTrades/UserTrades';
import UserInventory from '../UserInventory/UserInventory';
import ContextManager from '../../context/context-manager';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends React.Component{
    static contextType = ContextManager;

    handleBtnClick = () => {
        const { history } = this.props;
        history.push('/edit/stats');
    }
    render(){
        const hasData = this.context.activeUserData.hasOwnProperty('stats');
        let lft;
        if(hasData){
            if(this.context.activeUserData.stats.lft){
                lft = 'Yes'
            } else {
                lft = 'No'
            }
        }
        return(
            <section className="dashboard">
                <article className="user-stats">
                    <p>{hasData ? `Gamertag: ${this.context.activeUserData.stats.gamertag}` : ""}</p>
                    <p>{hasData ? `RocketID: ${this.context.activeUserData.stats.rocket_id}` : ""}</p>
                    <p>{hasData ? `Platform: ${this.context.activeUserData.stats.platform}` : ""}</p>
                    <p>{hasData ? `Rank: ${this.context.activeUserData.stats.rank}` : ""}</p>
                    <p>{hasData && this.context.activeUserData.stats.division !== null ? `Division: ${this.context.activeUserData.stats.division}` : ""}</p>
                    <p>{hasData && lft ? `LFT: Yes` : `LFT: No`}</p>
                    <p className="user-info">Teams show up based on your user stats.</p>
                    <div className="userStatsBtnContainer"><button className="user-stats-btn" onClick={this.handleBtnClick}>Edit Profile</button></div>
                </article>
                <UserTrades />
                <UserTeamRequests />
                <UserInventory />
            </section>
        );
    }
}