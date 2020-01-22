import React from 'react';
import ContextManager from '../../context/context-manager';
import UsersApiService from '../../services/users-api-service';
import './EditProfileForm.css';

export default class EditProfileForm extends React.Component{
    static contextType = ContextManager;

    handleSubmit = (e) => {
        this.context.clearErrorMessage();
        e.preventDefault();
        this.setState({ error: null });
        const { platform, gamertag, rocketid, rank, division, lft, bio } = e.target;
        const { history } = this.props;
        
        let updateUser = {
            platform: platform.value,
            gamertag: gamertag.value,
            rocket_id: rocketid.value,
            rank: rank.value,
            division: division.value,
            lft: lft.value,
            bio: bio.value
        }

        if(updateUser.rank.toLowerCase() === 'grand champion'.toLowerCase()){
            updateUser.division = null;
        } else if (updateUser.rank.toLowerCase() !== 'grand champion'.toLowerCase() && (updateUser.division === null || updateUser.division === "") ){
            updateUser.division = "I";
        }

            UsersApiService.updateUserById(updateUser)
            .then((user) => {
            platform.value = '';
            gamertag.value = '';
            rank.value = '';
            division.value = '';
            lft.value = '';
            bio.value = '';
            this.context.clearErrorMessage();
            history.push(`/dashboard`);
        })
        .catch(res => {
            this.context.updateErrorMessage('Oops: ' + res.error);
            this.context.scrollToErrorMessage();
        })
    }    

    componentWillUnmount(){
        this.context.getActiveUsersStats();
    }

    render(){
        const userData = this.context.activeUserData.hasOwnProperty('stats') ? this.context.activeUserData.stats : {};
        return(
            <form id="edit-profile-form" onSubmit={this.handleSubmit} >
                <div className="error-message">{!!this.context.errorMessage && this.context.errorMessage}</div>
                <div className="info">Required Fields</div>
                <div>
                    <label htmlFor="platform">Platform:</label>
                    <select id="platform" name="platform" defaultValue={userData.platform}>
                        <option value="PC">PC</option>
                        <option value="PS4">PS4</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                        <option value="Xbox One">Xbox One</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gamertag">Gamertag:</label>
                    <input type="text" id="gamertag" placeholder="ex. Savage Goalie 3024" name="gamertag"  defaultValue={userData.gamertag}/>
                </div>
                <div>
                    <label htmlFor="rocketid">RocketID:</label>
                    <input type="text" id="rocketid" placeholder="ex. SavageGoalie3024#123" name="rocketid"  defaultValue={userData.rocket_id}/>
                </div>
                <div>
                    <label htmlFor="register-rank">Rank:</label>
                    <select id="register-rank" name="rank"  defaultValue={userData.rank}>
                      <option value="Grand Champion">Grand Champion</option>
                      <option value="Champion III">Champion III</option>
                      <option value="Champion II">Champion II</option>
                      <option value="Champion I">Champion I</option>
                      <option value="Diamond III">Diamond III</option>
                      <option value="Diamond II">Diamond II</option>
                      <option value="Diamond I">Diamond I</option>
                      <option value="Platinum III">Platinum III</option>
                      <option value="Platinum II">Platinum II</option>
                      <option value="Platinum I">Platinum I</option>
                      <option value="Gold III">Gold III</option>
                      <option value="Gold II">Gold II</option>
                      <option value="Gold I">Gold I</option>
                      <option value="Silver III">Silver III</option>
                      <option value="Silver II">Silver II</option>
                      <option value="Silver I">Silver I</option>
                      <option value="Bronze III">Bronze III</option>
                      <option value="Bronze II">Bronze II</option>
                      <option value="Bronze I">Bronze I</option>
                      <option value="Unranked">Unranked</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="register-rank-division">Division:</label>
                    <select id="register-rank-division" name="division" defaultValue={userData.division}>
                        <option value={null}></option>
                        <option value="IV">IV</option>
                        <option value="III">III</option>
                        <option value="II">II</option>
                        <option value="I">I</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="register-lft">Looking for team?</label>
                    <select id="register-lft" name="lft" defaultValue={userData.lft}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="user-summary">Bio:</label>
                    <textarea id="user-summary" name="bio"  defaultValue={userData.bio}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        )
    }
} 