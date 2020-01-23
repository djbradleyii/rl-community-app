import React from 'react';
import ContextManager from '../../context/context-manager';
import { Link } from 'react-router-dom';
import './UserTrades.css';

export default class UserTrades extends React.Component{
    static contextType = ContextManager;

    proper = (word) => {
        const toUpper = word.split(" ");

        const completeWord = toUpper.map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        
        return completeWord.join(" ");    
    }

    render(){
        let tradeDetails = [];
        if(this.context.allItems.length > 0 && this.context.activeUserData.hasOwnProperty('stats')){
            tradeDetails = this.context.allItems.filter((itemDetails) => {
                return itemDetails.userid !== this.context.activeUserData.stats.id;
            })
            tradeDetails = tradeDetails.map((itemDetails, i) => {
                return(
                    <div key={i} className="trade-details">
                        <article className="trade-card">
                            <Link to={`/userdata/${itemDetails.userid}`} className="userdata-link"><h3>Gamertag: {itemDetails.gamertag}</h3></Link>
                            <p>Item: {itemDetails.name.toUpperCase()}</p>
                            <p>{this.proper(itemDetails.rarity)} {this.proper(itemDetails.category)}</p>
                            {itemDetails.painted ? <p>{itemDetails.painted.toUpperCase()} PAINTED</p> : " "}
                            {itemDetails.certfied ? <p>{itemDetails.certfied.toUpperCase()} CERTIFIED</p> : " "}
                            {itemDetails.special_edition ? <p>{itemDetails.special_edition.toUpperCase()} SPECIAL EDITION</p> : " "}
                        </article>
                    </div>
                )
            });
        }
        return(
            <section className="user-trades">
                <h2>Users Posted Inventory:</h2>
                {tradeDetails.length > 0 ? tradeDetails : <p className="no-results">No Trades found</p>}
            </section>
        );
    }
}