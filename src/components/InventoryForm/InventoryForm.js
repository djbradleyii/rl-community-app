import React from 'react';
import './InventoryForm.css';

export default class InventoryForm extends React.Component{
    static contextType = ContextManager;
    state = {
        category: "body",
        colors: ["black", "burnt sienna", "cobalt", "crimson", "forest green", "grey", "lime", "orange", "pink", "purple", "saffron", "sky blue", "titanium white"]
    }

    proper = (word) => {
        const toUpper = word.split(" ");

        const completeWord = toUpper.map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        
        return completeWord.join(" ");    
    }

    updateStateCategory = (e) => {
        e.preventDefault();
        this.setState({
            category: e.target.value
        })
    }

    paintedApproved = () => {
        const category = this.state.category;
        /* const paintedApprovedGroup = ["body", "decal", "rocket boost", "wheels", "toppers"];
        const isApproved = paintedApprovedGroup.includes(category) */
        if(category === "body" || category === "decal" || category === "rocket boost"|| category === "wheels" || category === "toppers"){
            return true;
        } else {
            return false;
        }
    }

    createCategoryOptions = () => {
        const category = ["body", "decal", "paint finish", "wheels", "rocket boost", "toppers", "antenna", "goal explosion", "trails", "player banner", "engine audio"];
        const categorySelect = category.map((category, i) => {
            return (
                <option key={i} value={category}>{this.proper(category)}</option>
            )
        })
        return categorySelect;
    }

    displayItems = () => {
        const category = this.state.category;

        const itemList = allItems[category].map((item, i) => {
            return(
                <option key={i} value={item}>{this.proper(item)}</option>
            )
        })
        return(
            <div>
            <label htmlFor={`inventory-${category}-items`}>Items:</label>
            <select id={`inventory-${category}-items`} name="categoryItem">
                {itemList}
            </select>
            </div> 
        )
    }

    createColorsCheckboxes = () => {
        const colors = this.state.colors;
        const colorCheckboxes = colors.map((color, i) => {
            return(
                <div key={i}>
                    <input type="checkbox" id={`color-${i}`} name={`color-${i}`} value={color} />
                    <label htmlFor={`color-${i}`}>{this.proper(color)}</label>
                </div> 
            )
        })
        return colorCheckboxes;
    }

    createColorsSelect = () => {
        const colors = this.state.colors;
        const colorSelect = colors.map((color, i) => {
            return(
                <option key={i} value={color}>{this.proper(color)}</option>
            )
        })
        return(
            <div>
                <label htmlFor={`inventory-colors`}>Colors:</label>
                <select id={`inventory-colors`} name="colors">
                <option value={null}>Not Painted</option>
                    {colorSelect}
                </select>
            </div> 
        )
    }


    createRarityOptions = () => {
        const rarity = ["common", "uncommon", "rare", "very rare", "import", "exotic", "black market", "premium", "limited"];
        const rarityOptions = rarity.map((rare, i) => {
            return <option key={i} value={rare}>{this.proper(rare)}</option>
        })
        return rarityOptions;
    }

    createCertifiedOptions = () => {
        const certificationList = ["Acrobat", "Aviator", "Goalkeeper", "Guardian", "Juggler", "Paragon", "Playmaker", "Scorer", "Show-Off", "Sniper", "Striker", "Sweeper", "Tactician", "Turtle", "Victor"];
        const certOptions = certificationList.map((cert, i) => {
            return <option key={i} value={cert}>{this.proper(cert)}</option>
        })
        return certOptions;
    }

    createSpecialEditionOptions = () => {
        const specialEdition = ["INVERTED", "INFINITE", "HOLOGRAPHIC"];
        const specialEditionList = specialEdition.map((title, i) => {
            return <option key={i} value={title}>{this.proper(title.toLowerCase())}</option>
        })
        return specialEditionList;
    }

    handleInventorySubmission = (e) => {
        e.preventDefault();
        let { category, categoryItem, colors, inventoryRarity, inventoryCertified, inventorySpecialEdition } = e.target;
        if(!colors || colors.value === "Not Painted"){
            colors = null;
        } else {
            colors = colors.value;
        }
        if(!inventoryCertified || inventoryCertified.value === "Not Certified"){
            inventoryCertified = null;
        } else {
            inventoryCertified = inventoryCertified.value;
        }
        if(!inventorySpecialEdition || inventorySpecialEdition.value === "Not Special Edition"){
            inventorySpecialEdition = null;
        } else {
            inventorySpecialEdition = inventorySpecialEdition.value;
        }

        const newInventoryItem = {
            id: this.context.selectedUser.inventory.length + 1,
            category: category.value,
            name: categoryItem.value,
            painted: colors,
            rarity: inventoryRarity.value,
            special_edition: inventorySpecialEdition,
            certified: inventoryCertified
        }

        this.context.selectedUser.inventory.push(newInventoryItem);
        this.context.items.push(newInventoryItem);
    }

    render(){
        return(
            <form id="inventory-form" onSubmit={this.handleInventorySubmission}>
                <div className="info">*Required Fields</div>
                <div className="inventory">
                    <div>
                        <label htmlFor="invetory-category">Category:</label>
                        <select id="inventory-category" name="category" onChange={this.updateStateCategory}>
                            {this.createCategoryOptions()}
                        </select>
                    </div>
                    {this.displayItems()}
                    {this.paintedApproved() ? <section className="form-checkboxes">
                        <label htmlFor="inventory-category">Colors:</label>
                        {this.createColorsSelect()}
                    </section> : "" }
                    <div>
                        <label htmlFor="inventory-rarity">Rarity:</label>
                        <select id="inventory-rarity" name="inventoryRarity">
                            {this.createRarityOptions()}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="inventory-certified">Certified:</label>
                        <select id="inventory-certified" name="inventoryCertified">
                            <option value={null}>Not Certified</option>
                            {this.createCertifiedOptions()}
                        </select>
                    </div>
                    {
                        this.state.category === "wheels" ? <div>
                            <label htmlFor="inventory-special-edition">Special Edition:</label>
                            <select id="inventory-special-edition" name="inventorySpecialEdition">
                                <option value={null}>Not Special Edition</option>
                                {this.createSpecialEditionOptions()}
                            </select>
                        </div> : " "
                    }
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}