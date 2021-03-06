import React from 'react';
import './RegisterPage.css';
import ContextManager from '../../context/context-manager';
import AuthApiService from '../../services/auth-api-service';

export default class RegisterPage extends React.Component{
    static contextType = ContextManager;

    handleSubmit = (e) => {
        this.context.updateLoadingMessage("Loading...");
        this.context.clearErrorMessage();
        e.preventDefault();

        this.setState({ error: null });
        const { fname, lname, platform, gamertag, rocketid, rank, division, lft, email, password, passwordVerify, bio} = e.target;
        const { history } = this.props;

        let newUser = {
            fname: fname.value,
            lname: lname.value,
            platform: platform.value,
            gamertag: gamertag.value,
            rocket_id: rocketid.value,
            rank: rank.value,
            division: division.value,
            lft: lft.value,
            email: email.value,
            password: password.value,
            bio: bio.value
        }

        if(newUser.rank === "Grand Champion"){
            newUser.division = null;
        } else if(newUser !== "Grand Champion" && (newUser.division === null || newUser.division === "")){
            newUser.division = "I";
        }

        if(password.value === passwordVerify.value){
            AuthApiService.postUser(newUser)
            .then((user) => {
            fname.value = '';
            lname.value = '';
            platform.value = '';
            gamertag.value = '';
            rocketid.value = '';
            rank.value = '';
            division.value = '';
            lft.value = '';
            email.value = '';
            password.value = '';
            passwordVerify.value = '';
            bio.value= '';
            this.context.clearErrorMessage();
            this.context.clearLoadingMessage();
            history.push(`/registered`);
        })
        .catch(res => {
            this.context.clearLoadingMessage();
            this.context.updateErrorMessage('Oops: '+ res.error);
            this.context.scrollToErrorMessage();
        })
    } else {
        this.context.clearLoadingMessage();
        this.context.updateErrorMessage('Password must match');
        this.context.scrollToErrorMessage();
    } 
}
    render(){
        return(
            <form id="register-form" onSubmit={this.handleSubmit} >
                <div className="error-message">{!!this.context.errorMessage && this.context.errorMessage}</div>
                <div className="info">*Required Fields</div>
                <div>
                    <label htmlFor="fname">*First Name:</label>
                    <input type="text" id="fname" placeholder="ex. Ken" name="fname" required/>
                </div>
                <div>
                    <label htmlFor="lname">*Last Name:</label>
                    <input type="text" id="lname" placeholder="ex. Adams" name="lname" required/>
                </div>
                <div>
                    <label htmlFor="user-summary">Bio:</label>
                    <textarea id="user-summary" name="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="platform">*Platform:</label>
                    <select id="platform" name="platform" required>
                        <option value="PC">PC</option>
                        <option value="PS4">PS4</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                        <option value="Xbox One">Xbox One</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gamertag">*Gamertag:</label>
                    <input type="text" id="gamertag" placeholder="ex. Savage Goalie 3024" name="gamertag" required/>
                </div>
                <div>
                    <label htmlFor="rocketid">RocketID:</label>
                    <input type="text" id="rocketid" placeholder="ex. SavageGoalie3024#123" name="rocketid" />
                </div>
                <div>
                    <label htmlFor="register-rank">Rank:</label>
                    <select id="register-rank" name="rank" required>
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
                    <select id="register-rank-division" name="division" required>
                        <option value={null}></option>
                        <option value="IV">IV</option>
                        <option value="III">III</option>
                        <option value="II">II</option>
                        <option value="I">I</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="register-lft">Looking for team?</label>
                    <select id="register-lft" name="lft" required>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email">*Email:</label>
                    <input type="email" id="email" name="email" placeholder="ex. myemailaddress@email.com"  required/>
                </div>
                <div>
                    <div><p className="info info-password">Your password must contain 1 number, 1 capital letter, 1 special character (!@#$%^&amp;) and it must be at least 8 characters long.</p></div>
                    <label htmlFor="password">*Password:</label>
                    <input type="password" id="password" name="password"  required/>
                </div>
                <div>
                    <label htmlFor="passwordVerify">*Verify Password:</label>
                    <input type="password" id="passwordVerify" name="passwordVerify"  required/>
                </div>
                <div>
                    {this.context.loadingMessage ? <div className="success-message">{this.context.loadingMessage}</div> : ""}
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}