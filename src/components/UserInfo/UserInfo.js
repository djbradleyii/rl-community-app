import React from 'react';
import ContextManager from '../../context/context-manager';
import UsersApiService from '../../services/users-api-service';
import './UserInfo.css';

export default class UserInfo extends React.Component{
    static contextType = ContextManager;

    constructor(props){
        super(props);
        this.state = {
            selectedUser: {}
        }
    }

    proper = (word) => {
        const toUpper = word.split(" ");

        const completeWord = toUpper.map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        
        return completeWord.join(" ");    
    }

    createInventoryCard = (item, i) => {
        return(
            <div key={i} className="inventory-details">
                <article className="item-card">
                    <p>Item: {item.name.toUpperCase()}</p>
                    <p>{this.proper(item.rarity)} {this.proper(item.category)}</p>
                    {item.painted ? <p>{item.painted.toUpperCase()} PAINTED</p> : " "}
                    {item.certfied ? <p>{item.certfied.toUpperCase()} CERTIFIED</p> : " "}
                    {item.special_edition ? <p>{item.special_edition.toUpperCase()} SPECIAL EDITION</p> : " "}
                </article>
            </div>
        )
    }

    updateSelectedUser = () => {
        const { match } = this.props;
        const userid = match ? match.params.userid : "";
        UsersApiService.getUserById(userid)
        .then((userData) => {
            this.setState({
                selectedUser: userData
            })
        })
    }

    componentDidMount(){
        this.updateSelectedUser();
    }

    render(){
        
        let userDetails;
        let usersInventory;
        let inventoryCards;

        if(this.state.selectedUser.hasOwnProperty('user')){
            userDetails = this.state.selectedUser.user;
            usersInventory = this.state.selectedUser.inventory;
            inventoryCards = usersInventory.map((item, i) => this.createInventoryCard(item, i));
        }
        return(
            <article className="selected-user-stats">
                <section className="selected-user-details">
                    <div className="selected-user-details-wrapper">
                    <h2 className="selected-user-title">Player Details:</h2>
                    <p>{userDetails ? `Gamertag: ${userDetails.gamertag}` : ""}</p>
                    <p>{userDetails ? `RocketID: ${userDetails.rocket_id}` : ""}</p>
                    <p>{userDetails ? `Platform: ${userDetails.platform}` : ""}</p>
                    <p>{userDetails ? `Rank: ${userDetails.rank}` : ""}</p>
                    <p>{userDetails && userDetails.division !== null ? `Division: ${userDetails.division}` : ""}</p>
                    </div>
                </section>
                <h2 className="selected-user-inventory-title">{`Inventory (${usersInventory ? usersInventory.length : "0"}):`}</h2>
                <section className="selected-user-inventory">
                    {inventoryCards}
                </section>
            </article>
        )
    }
}