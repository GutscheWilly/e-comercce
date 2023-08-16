import React from 'react';
import { BsCartX } from 'react-icons/bs';
import propTypes from 'prop-types';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';

function CartItem({ item }) {
    const {
        thumbnail,
        title,
        price
    } = item;

    return (
        <section className="cart__item">
            <img 
                src={ thumbnail } 
                className="item__img" 
                alt="Imagem do Produto" 
            />

            <div className="item__content">
                <h3 className="item__title">{ title }</h3>
                
                <h3 className="item__price">{ formatCurrency(price, 'BRL') }</h3>

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

CartItem.propTypes = {
    item: propTypes.shape(
        {
            thumbnail: String,
            price: String,
            title: String
        }
    )
}.isRequired;
