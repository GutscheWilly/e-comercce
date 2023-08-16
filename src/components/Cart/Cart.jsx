import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
    const {
        selectedItems
    } = useContext(AppContext);

    function getCartItems() {
        return selectedItems.map( item => 
            <CartItem item={ item } key={ item.id } />
        );
    }

    function getTotalPrice() {
        return selectedItems.reduce( (total, { price }) => 
            total += price
        , 0);
    }

    return (
        <section className="cart">
            <div className="cart__items">
                { getCartItems() }
            </div>

            <div className="cart__info">
                Total: { formatCurrency(getTotalPrice(), 'BRL') }
            </div>
        </section>
    );
}

export default Cart;
