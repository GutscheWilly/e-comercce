import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart() {
    return (
        <section className="cart">
            <div className="cart__items">
                <CartItem />
            </div>

            <div className="cart__info">
                Info
            </div>
        </section>
    );
}

export default Cart;
