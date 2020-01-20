import React from 'react';
import ContextManager from '../../context/context-manager';
import './UserTeamRequests.css';

export default class UserTeamRequests extends React.Component{
    static contextType = ContextManager;
    render(){
        const myRank = this.context.selectedUser.stats.rank;
        const teams = this.context.teams.filter((user) => {
            return user.rank === myRank;
        })
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

        return(
            <section className="user-team-requests">
                <h2>Available Teams:</h2>
                {teamCards}
            </section>
        );
    }
}