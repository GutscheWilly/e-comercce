import React from 'react';
import { BiCartAdd } from 'react-icons/bi';

import './ProductCard.css';

function ProductCard() {
    return (
        <section className="product__card">
            <img 
                src="http://http2.mlstatic.com/D_626936-MLA50293629492_062022-W.jpg" 
                alt="product" 
                className="card__img"
            />

            <div className="card__infos">
                <h2 className="card__price">R$ 200</h2>
                <h2 className="card__title">PC</h2>
            </div>

            <button type="button" className="button__add-cart">
                <BiCartAdd />
            </button>
        </section>
    );
}

export default ProductCard;
