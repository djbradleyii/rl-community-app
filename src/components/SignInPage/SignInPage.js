import React from 'react';
import users from '../../users';
import './SignInPage.css';

export default class SignInPage extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const { gamertag, password } = e.target;
        let isRegistered = users.find((user) => {
            return user.gamertag === gamertag.value;
        })

        if(isRegistered){
            isRegistered = isRegistered.password === password.value
        } else {
            alert('User not found');
        }

        if(isRegistered){
            const { history } = this.props;
            history.push(`/dashboard/${gamertag}`);
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} id="signin-form">
                <div>
                    <label htmlFor="gamertag">Gamertag:</label>
                    <input type="text" id="gamertag" name="gamertag" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>       
            </form>
        );
    }
}