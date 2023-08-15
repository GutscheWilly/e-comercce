import React from 'react';
import { BsCartX } from 'react-icons/bs';

import './CartItem.css';

function CartItem() {
    return (
        <section className="cart__item">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZAIoxqTSeoO32obEMX8Ghv7mQ0dE5XpyHyU3QkrAmTQiZeF6d9gnFdtq5B7fwFzAwek&usqp=CAU" 
                className="item__img" 
                alt="Imagem do Produto" 
            />

            <div className="item__content">
                <h3 className="item__title">Título do item</h3>
                
                <h3 className="item__price">R$ 1024,00</h3>

                <button 
                    type="button"
                    className="button__remove-item"
                >
                    <BsCartX />
                </button>
            </div>
        </section>
    );
}

export default CartItem;
