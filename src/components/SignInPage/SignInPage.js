import React from 'react';
import TokenService from '../../services/token-service';
import ContextManager from '../../context/context-manager';
import AuthApiService from '../../services/auth-api-service';
import ActiveUserService from '../../services/activeuser-service';
import UsersApiService from '../../services/users-api-service';
import './SignInPage.css';

export default class SignInPage extends React.Component{
    static contextType = ContextManager;
    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({ error: null });
        const { email, password } = e.target;
    
        AuthApiService.postLogin({
            email: email.value,
            password: password.value,
        })
        .then(res => {
            const { history } = this.props;
            email.value = '';
            password.value = '';
            TokenService.saveAuthToken(res.authToken);
            UsersApiService.getAllEventsForUser()
            .then(usersData => {
                ActiveUserService.saveUserData(usersData);
            })
            this.context.updateSelectedUserState(usersData);
            this.context.clearErrorMessage();
            history.push(`/dashboard`); 
         })
         .catch(res => {
            this.context.updateErrorMessage('Oops: '+ res.error);
            this.context.scrollToErrorMessage();
         })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} id="signin-form">
                <div className="error-message">{!!this.context.errorMessage && this.context.errorMessage}</div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" />
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