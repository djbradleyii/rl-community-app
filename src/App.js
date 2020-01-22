import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import SignInPage from './components/SignInPage/SignInPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Dashboard from './components/Dashboard/Dashboard';
import InventoryForm from './components/InventoryForm/InventoryForm';
import LogoutSuccessful from './components/LogoutSuccessful/LogoutSuccessful';
import PageNotFound from './components/PageNotFound/PageNotFound';
import TeamBoard from './components/TeamBoard/TeamBoard';
import Footer from './components/Footer/Footer';
import ContextManager from '../src/context/context-manager';
import ItemsApiService from '../src/services/items-api-service';
import UsersApiService from '../src/services/users-api-service';
import TokenService from './services/token-service';
import './App.css';
import EditProfileForm from './components/EditProfileForm/EditProfileForm';
import AccountCreated from '../src/components/AccountCreated/AccountCreated';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activeUserData: {},
      allItems: [],
      errorMessage: "",
      successMessage: ""
    }
  }

  getActiveUsersStats = () => {
    UsersApiService.getActiveUsersStats()
    .then((activeUserData) => {
      this.setState({
        activeUserData
      })
    })
    .catch(res => {
      this.context.updateErrorMessage('Oops: '+ res.error);
      this.context.scrollToErrorMessage();
    })
  }

  getAllItems = () => {
    ItemsApiService.getAllItems()
    .then((allItems) => {
      this.setState({
        allItems
      })
    })
  }

  updateErrorMessage = (error) => {
    this.setState({
      errorMessage: error
    }, () => {
      setTimeout(() => this.clearSuccessMessage(), 10000)
    });
  }

  clearErrorMessage = () => {
    this.setState({
      errorMessage: null
    });
  }

  updateSuccessMessage = (msg) => {
    this.setState({
      successMessage: msg
    }, () => {
      setTimeout(() => this.clearSuccessMessage(), 1000)
    });
  }

  clearSuccessMessage = (msg) => {
    this.setState({
      successMessage: null
    });
  }

  scrollToErrorMessage = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount(){
    if(TokenService.hasAuthToken()){
      this.getActiveUsersStats();
      this.getAllItems();
    }
  }

  render(){
    const contextValue = {
      errorMessage: this.state.errorMessage,
      successMessage: this.state.successMessage,
      activeUserData: this.state.activeUserData,
      getActiveUsersStats: this.getActiveUsersStats,
      getAllItems: this.getAllItems,
      allItems: this.state.allItems,
      updateErrorMessage: this.updateErrorMessage,
      clearErrorMessage: this.clearErrorMessage,
      updateSuccessMessage: this.updateSuccessMessage,
      clearSuccessMessage: this.clearSuccessMessage,
      scrollToErrorMessage: this.scrollToErrorMessage
    }
    
    return (
      <ContextManager.Provider value={contextValue}>
        <main role="main" className="App">
          <Route path='/' component={Header} />
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path='/registered' component={AccountCreated} />
          <Route exact path="/signin" component={SignInPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/edit/stats" component={EditProfileForm}></Route>
          <Route exact path="/add-inventory-item" component={InventoryForm}></Route>
          <Switch>
            <Route exact path="/logout" component={LogoutSuccessful}></Route>
            <Route exact path="/notfound" component={PageNotFound}></Route>
          </Switch>
          <Route exact path="/teams" component={TeamBoard}></Route>
          <Route path='/' component={Footer} />    
        </main>
      </ContextManager.Provider>
    );
  }
}

export default withRouter(App)