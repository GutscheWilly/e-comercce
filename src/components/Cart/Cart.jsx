import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import AppContext from '../../context/AppContext';

function Cart() {
    const {
        selectedItems
    } = useContext(AppContext);

    function getCartItems() {
        return selectedItems.map( item => 
            <CartItem item={ item } key={ item.id } />
        );
    }

    return (
        <section className="cart">
            <div className="cart__items">
                { getCartItems() }
            </div>

            <div className="cart__info">
                Info
            </div>
        </section>
    );
}

export default Cart;
