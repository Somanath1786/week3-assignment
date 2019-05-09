import React from 'react'
import HeaderSection from './HeaderSection';
import Rentals from './Rentals';
import ShoppingCart from './ShoppingCart';

import airBnBRentals from './airbnbs.json';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rentals : airBnBRentals,
            selectedItems : [],
            total : 0
        }
    }

    deleteFromCart = (idx) => {
        return(event) => {
            const newTotal = this.state.total - this.state.selectedItems[idx].payment.cost;
            const updatedSelectedItems = this.state.selectedItems;
            updatedSelectedItems.splice(idx, 1);
            
            this.setState(prevState => {
                return {
                    selectedItems : updatedSelectedItems,
                    total : newTotal
                };
            })

        }
    }

    addToCart = (idx) => {
        return(event) => {
            const newTotal = this.state.total + this.state.rentals[idx].payment.cost;       
            this.setState(prevState => {
                return {
                    selectedItems: [...prevState.selectedItems, prevState.rentals[idx]],
                    total : newTotal
                };
            });        
        }
    }

    render() {        
        return (
            <div name="mainPage">
                <HeaderSection />
                <ShoppingCart selectedItems = {this.state.selectedItems} onClick={this.deleteFromCart} total={this.state.total} items={this.state.selectedItems.length}/>
                <Rentals rentals = {this.state.rentals} onClick={this.addToCart}/>               
            </div>
        );
    };
}