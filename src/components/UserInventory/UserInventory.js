import React from 'react';
import ContextManager from '../../context/context-manager';
import ItemsApiService from '../../services/items-api-service';
import './UserInventory.css';

export default class UserInventory extends React.Component{
    static contextType = ContextManager;
    
    state = {
        category: "all",
        painted: "all",
        rarity: "all",
        attribute: "all"
    }

    proper = (word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);    
    }

    removeItem(itemid){
        ItemsApiService.removeItem(itemid)
        .then((itemRemoved) => {
            this.context.getActiveUsersStats();
        })
    }

    getCards = () => {
        let inventory = this.context.activeUserData.inventory;
        if(this.state.category !== "all"){
            inventory = inventory.filter((item) => {
                if(item.category !== null){
                    return item.category.toLowerCase() === this.state.category.toLowerCase();
                } else {
                    return "";
                }
            })
        }

        if(this.state.painted !== "all"){
            inventory = inventory.filter((item) => {
                if(item.painted !== null){
                    return item.painted.toLowerCase() === this.state.painted.toLowerCase();
                } else {
                    return "";
                }
            })
        }

        if(this.state.rarity !== "all"){
            inventory = inventory.filter((item) => {
                if(item.rarity !== null){
                    return item.rarity.toLowerCase() === this.state.rarity.toLowerCase();
                } else {
                    return "";
                }
            })
        }

        if(this.state.attribute !== "all"){
            inventory = inventory.filter((item) => {
                if(this.state.attribute === "certified" && item.certified !== null){
                    return item.certified !== null;
                } else if(this.state.attribute === "painted" && item.painted !== null){
                    return item.painted !== null;
                } else if(this.state.attribute === "special edition" && item.special_edition !== null){
                    return item.special_edition !== null;
                } else {
                    return "";
                }
            })
        }

        let myCards = inventory.map((item, i) => {
            return(
                <article key={i} className="item-card">
                    <h3>{item.name.toUpperCase()}</h3>
                    <div className="card-rarity">
                        {item.rarity ? <p>{this.proper(item.rarity)} {this.proper(item.category)}</p>: ""}
                    </div>
                    {item.painted || item.certified || item.special_edition ? <ul className="row card-attribute">
                        {item.certified ? <li>{item.certified.toUpperCase()} CERTIFIED</li> : " "}
                        {item.painted ? <li>{item.painted.toUpperCase()} PAINTED</li> : " "}
                        {item.special_edition ? <li>{item.special_edition.toUpperCase()} SPECIAL EDITION</li> : " "}
                    </ul> : " "}
                    <div className="itemBtnContainer"><button className="removeItemBtn" onClick={() => this.removeItem(item.id)}>Remove Item</button></div>
                </article>
            )
        })
        return myCards;
    }

    updateCategoryState = (e) => {
        e.preventDefault();
        this.setState({
            category: e.target.value
        }, this.getCards)
    }

    updatePaintedState = (e) => {
        e.preventDefault();
        this.setState({
            painted: e.target.value
        }, this.getCards)
    }

    updateRarityState = (e) => {
        e.preventDefault();
        this.setState({
            rarity: e.target.value
        }, this.getCards)
    }

    updateAttributeState = (e) => {
        e.preventDefault();
        this.setState({
            attribute: e.target.value
        }, this.getCards)
    } 
    render(){
        return(
            <section className="user-inventory">
                <h2>Inventory</h2>
                <form id="inventory-search-form">
                    <div>
                        <label htmlFor="item-category">Category:</label>
                        <select id="item-category" name="category" onChange={this.updateCategoryState}>
                        <option value="all">All</option>
                        <option value="blueprints">Blueprints</option>
                        <option value="body">Body</option>
                        <option value="decal">Decal</option>
                        <option value="paint_finish">Paint Finish</option>
                        <option value="wheels">Wheels</option>
                        <option value="rocket_boost">Rocket Boost</option>
                        <option value="topper">Topper</option>
                        <option value="antenna">Antenna</option>
                        <option value="goal_explosion">Goal Explosion</option>
                        <option value="trail">Trail</option>
                        <option value="player_banner">Player Banner</option>
                        <option value="avatar_border">Avatar Border</option>
                        <option value="engine_audio">Engine Audio</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="item-color">Color:</label>
                        <select id="item-color" name="painted" onChange={this.updatePaintedState}>
                        <option value="all">All</option>
                        <option value="black">Black</option>
                        <option value="burnt sienna">Burnt Sienna</option>
                        <option value="cobalt">Cobalt</option>
                        <option value="crimson">Crimson</option>
                        <option value="forest green">Forest Green</option>
                        <option value="grey">Grey</option>
                        <option value="lime">Lime</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                        <option value="purple">Purple</option>
                        <option value="saffron">Saffron</option>
                        <option value="sky blue">Sky Blue</option>
                        <option value="titanium white">Titanium White</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="item-rarity">Rarity:</label>
                        <select id="item-rarity" name="rarity" onChange={this.updateRarityState}>
                        <option value="all">All</option>
                        <option value="common">Common</option>
                        <option value="uncommon">Uncommon</option>
                        <option value="rare">Rare</option>
                        <option value="very rare">Very Rare</option>
                        <option value="import">Import</option>
                        <option value="exotic">Exotic</option>
                        <option value="black market">Black Market</option>
                        <option value="premium">Premium</option>
                        <option value="limited">Limited</option>
                        </select>
                    </div>
                    <div className="styled-select">
                        <label htmlFor="item-attribute">Attribute:</label>
                        <select id="item-attribute" name="attribute" onChange={this.updateAttributeState}>
                        <option value="all">All</option>
                        <option value="certified">Certified</option>
                        <option value="painted">Painted</option>
                        <option value="special edition">Special Edition</option>
                        </select>
                    </div>
                </form>
                {this.context.activeUserData.hasOwnProperty('inventory') ? this.getCards() : <p>Add items to your inventory</p>}
            </section>
        );
    }
}