import React, { useContext } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {
    const {
        selectedItems,
        isCartActive,
        setIsCartActive
    } = useContext(AppContext);

    function changeCartVisibility() {
        setIsCartActive(!isCartActive);
    }

    function isThereCartItem() {
        return selectedItems.length > 0;
    }

    return (
        <button 
            type="button" 
            className="cart__button"
            onClick={ changeCartVisibility }
        >
            <PiShoppingCartBold />

            { isThereCartItem() ? <span className="cart__status">{ selectedItems.length }</span> : '' }
        </button>
    );
}

export default CartButton;
