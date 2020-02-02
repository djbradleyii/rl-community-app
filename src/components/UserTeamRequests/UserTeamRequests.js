import React from 'react';
import ContextManager from '../../context/context-manager';
import './UserTeamRequests.css';
import TeamsService from '../../services/teams-api-service';

export default class UserTeamRequests extends React.Component{
    static contextType = ContextManager;
    constructor(props){
        super(props);
        this.state = {
            myRank: "",
            teams: []
        }
    }

    getTeamCards = () => {
        const myRank = this.context.activeUserData.stats.rank;
        const myPlatform = this.context.activeUserData.stats.platform;
        const myID = this.context.activeUserData.stats.id;
        let teams = this.state.teams.filter((user) => {
            return user.rank === myRank && user.id !== myID && user.platform === myPlatform;
        })
        teams = teams.slice(0, 3);
        const teamCards = teams.map((user, i) => {
            return(
                <article key={i} className="team-card">
                    <h3>Gamertag: {user.gamertag}</h3>
                    <div className="team-card-platform">
                        <div className="team-column"><p>Platform:</p></div>
                        <div className="team-column"><p>{user.platform}</p></div>
                    </div>
                    <div className="team-card-rank">
                        <div className="team-column"><p>Rank:</p></div>
                        <div className="team-column"><p>{user.rank}</p></div>
                    </div>
                    <div className="team-card-division">
                        <div className="team-column"><p>Division:</p></div>
                        <div className="team-column"><p>{user.division}</p></div>
                    </div>
                </article>
            )
        })
        return teamCards;
    }

    componentDidMount(){
        TeamsService.getAllUsersLookingForTeam()
        .then((teams) => {
            this.setState({
                teams
            })
        })
    }
    
    render(){
        return(
            <section className="user-team-requests">
                <h2>Available Teams:</h2>
                {!!this.context.activeUserData.hasOwnProperty('stats') && this.getTeamCards().length !== 0 ? this.getTeamCards() : <p className="no-results">No players with your rank are looking for teams.</p>}
            </section>
        );
    }
}