import React from 'react';
import ContextManager from '../../context/context-manager';
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
        const tradeCards = this.context.selectedUser.trades.map((trade, i) => {
            const collection = [];
            const user = this.context.users.find((user) => {
                return trade.userid === user.id;
            })
            const tradeDetails = trade.items.map((item, k) => {
                collection.push(item.id)
                return(
                    <div key={k} className="trade-details">
                        <p>Item: {item.name.toUpperCase()}</p>
                        <p>{this.proper(item.rarity)} {this.proper(item.category)}</p>
                        {item.painted ? <p>{item.painted.toUpperCase()} PAINTED</p> : " "}
                        {item.certfied ? <p>{item.certfied.toUpperCase()} CERTIFIED</p> : " "}
                        {item.special_edition ? <p>{item.special_edition.toUpperCase()} SPECIAL EDITION</p> : " "}
                    </div>
                )
            })
            return(
                <article key={i} className="trade-card">
                    <h3>Gamertag: {user.gamertag === this.context.selectedUser.stats.gamertag ? "Me" : user.gamertag}</h3>
                    {tradeDetails}
                </article>
            )
        });
        return(
            <section className="user-trades">
                <h2>Trades</h2>
                {tradeCards.length > 0 ? tradeCards : "New Trades found"}
            </section>
        );
    }
}