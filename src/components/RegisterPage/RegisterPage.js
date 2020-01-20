import React from 'react';
import './RegisterPage.css';
import ContextManager from '../../context/context-manager';
import moment from 'moment';
import users from '../../users';

export default class RegisterPage extends React.Component{
    static contextType = ContextManager;

    handleSubmit = (e) => {
        e.preventDefault();
        const { fname, lname, dob, platform, gamertag, rank, division, lft, email, password, passwordVerify} = e.target;
        let newUser = {
            id: users.length + 1,
            fname: fname.value,
            lname: lname.value,
            dob: moment(dob.value).format('MM/DD/YYYY'),
            platform: platform.value,
            gamertag: gamertag.value,
            rank: rank.value,
            division: division.value,
            lft: lft.value,
            email: email.value,
            password: password.value
        }

        if(rank.value.toLowerCase() === 'grand champion'.toLowerCase() && division.value !== null){
            newUser.division = null;
        } else if (rank.value.toLowerCase() !== 'grand champion'.toLowerCase() && division.value === null ){
            alert('You will have to update your division on the dashboard');
            newUser.division = "I"
        }

        if(password.value === passwordVerify.value){
            users.push(newUser);
            const { history } = this.props;
            history.push('/signin')
        } else {
            alert('Passwords must match');
        }
    }

    render(){
        return(
            <form id="register-form" onSubmit={this.handleSubmit} >
                <div className="info">*Required Fields</div>
                <div>
                    <label htmlFor="fname">*First Name:</label>
                    <input type="text" id="fname" placeholder="ex. Ken" name="fname" required />
                </div>
                <div>
                    <label htmlFor="lname">*Last Name:</label>
                    <input type="text" id="lname" placeholder="ex. Adams" name="lname" required/>
                </div>
                <div>
                    <label htmlFor="dob">*Birth Date:</label>
                    <input type="date" id="dob" name="dob" required/>
                </div>
                <div>
                    <label htmlFor="user-summary">Bio:</label>
                    <textarea id="user-summary" name="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="platform">*Platform:</label>
                    <select id="platform" name="platform" required>
                        <option value="pc">PC</option>
                        <option value="ps4">PS4</option>
                        <option value="nintendo switch">Nintendo Switch</option>
                        <option value="xbox one">Xbox One</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gamertag">*Gamertag:</label>
                    <input type="text" id="gamertag" placeholder="ex. Savage Goalie 3024" name="gamertag" required/>
                </div>
                <div>
                    <label htmlFor="register-rank">Rank:</label>
                    <select id="register-rank" name="rank" required>
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
                    <input type="email" id="email" name="email" placeholder="ex. myemailaddress@email.com" required />
                </div>
                <div>
                    <div><p className="info info-password">Your password must contain 1 number, 1 capital letter, 1 special character (!@#$%^&amp;) and it must be at least 8 characters long.</p></div>
                    <label htmlFor="password">*Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="passwordVerify">*Verify Password:</label>
                    <input type="password" id="passwordVerify" name="passwordVerify" required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}