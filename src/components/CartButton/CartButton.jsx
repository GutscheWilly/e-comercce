import React, { useContext } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {
    const {
        selectedItems
    } = useContext(AppContext);

    return (
        <button type="button" className="cart__button">
            <PiShoppingCartBold />

            <span className="cart__status">
                { selectedItems.length }
            </span>
        </button>
    );
}

export default CartButton;
