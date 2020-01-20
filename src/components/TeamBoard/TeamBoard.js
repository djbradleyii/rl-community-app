import React from 'react';
import ContextManager from '../../context/context-manager';
import './TeamBoard.css';

export default class TeamBoard extends React.Component{
    static contextType = ContextManager;

    state = {
        platform: "all",
        rank: "all",
        division: "all",
    }

    createTeamsList = () => {
        let teams = this.context.users.filter((user) => {
            return user.lft;
        });

        if(this.state.platform !== "all"){
            teams = teams.filter((user) => {
                return user.platform.toLowerCase() === this.state.platform.toLowerCase();
            })
        }

        if(this.state.rank !== "all"){
            teams = teams.filter((user) => {
                return user.rank.toLowerCase() === this.state.rank.toLowerCase();
            })
        }

        if(this.state.division !== "all"){
            teams = teams.filter((user) => {
                return user.division.toLowerCase() === this.state.division.toLowerCase();
            })
        }


        const teamCards = teams.map((user, i) => {
            return (
                <article key={i} className="team-card">
                    <h3>{user.gamertag}</h3>
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

        if(teamCards.length === 0){
            return <p className="no-results">No Teams Found</p>;
        }
        return teamCards;
    }

    updatePlatformState = (e) => {
        e.preventDefault();
        this.setState({
            platform: e.target.value
        }, this.createTeamsList)
    }

    updateRankState = (e) => {
        e.preventDefault();
        this.setState({
            rank: e.target.value
        }, this.createTeamsList)
    }

    updateDivisionState = (e) => {
        e.preventDefault();
        this.setState({
            division: e.target.value
        }, this.createTeamsList)
    }

    render(){        
        return(
        <div>
            <form id="team-search-form">
                <div>
                    <label htmlFor="team-platform">Platform:</label>
                    <select id="team-platform" name="platform" onChange={this.updatePlatformState}>
                      <option value="all">All</option>
                      <option value="pc">PC</option>
                      <option value="ps4">PS4</option>
                      <option value="switch">Nintendo Switch</option>
                      <option value="xbox">Xbox One</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="team-rank">Rank:</label>
                    <select id="team-rank" name="team-rank" onChange={this.updateRankState}>
                      <option value="all">All</option>
                      <option value="grand champion">Grand Champion</option>
                      <option value="champion III">Champion III</option>
                      <option value="champion II">Champion II</option>
                      <option value="champion I">Champion I</option>
                      <option value="diamond III">Diamond III</option>
                      <option value="diamond II">Diamond II</option>
                      <option value="diamond I">Diamond I</option>
                      <option value="platinum III">Platinum III</option>
                      <option value="platinum II">Platinum II</option>
                      <option value="platinum I">Platinum I</option>
                      <option value="gold III">Gold III</option>
                      <option value="gold II">Gold II</option>
                      <option value="gold I">Gold I</option>
                      <option value="silver III">Silver III</option>
                      <option value="silver II">Silver II</option>
                      <option value="silver I">Silver I</option>
                      <option value="bronze III">Bronze III</option>
                      <option value="bronze II">Bronze II</option>
                      <option value="bronze I">Bronze I</option>
                      <option value="unranked">Unranked</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="team-rank-division">Division:</label>
                    <select id="rank-division" name="rank-division" onChange={this.updateDivisionState}>
                      <option value="all">All</option>
                      <option value="IV">IV</option>
                      <option value="III">III</option>
                      <option value="II">II</option>
                      <option value="I">I</option>
                    </select>
                </div>
            </form>
            {/* !!this.state.events.length && this.renderContent() */}
            <div className="team-search-results">
                {this.createTeamsList()}
            </div>
        </div>
        );
    }
}