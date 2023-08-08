import React from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';

import './CartButton.css';

function CartButton() {
    return (
        <button type="button" className="cart__button">
            <PiShoppingCartBold />

            <span className="cart__status">
                12
            </span>
        </button>
    );
}

export default CartButton;
