import React from 'react'
import HeaderSection from './HeaderSection';
import Rentals from './Rentals';
import ShoppingCart from './ShoppingCart';

export default class MainPage extends React.Component {
    render() {
        return (
            <div name="mainPage">
                <HeaderSection />
                <ShoppingCart />
                <Rentals />               
            </div>
        );
    };
}