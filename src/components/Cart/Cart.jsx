import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import EmptyCart from '../EmptyCart/EmptyCart';

function Cart() {
    const {
        selectedItems,
        isCartActive
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

    function isCartEmpty() {
        return selectedItems.length === 0;
    }

    return (
        <section className={ `cart ${ isCartActive ? 'cart__active' : '' }` }>
            { isCartEmpty() ? <EmptyCart /> : <div className="cart__items">{ getCartItems() }</div> }

            <div className="cart__info">
                Total: { formatCurrency(getTotalPrice(), 'BRL') }
            </div>
        </section>
    );
}

export default Cart;
