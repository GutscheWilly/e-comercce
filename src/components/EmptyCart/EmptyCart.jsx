import React from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import './EmptyCart.css';

function EmptyCart() {
    return (
        <section className="empty__cart">
            <h3 className="empty__cart-message">
                O carrinho está vazio!
            </h3>
            
            <div className="empty__cart-icon">
                <MdOutlineProductionQuantityLimits />
            </div>
        </section>
    );
}

export default EmptyCart;
