import React from 'react';
import { BiCartAdd } from 'react-icons/bi';
import propTypes from 'prop-types';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ product }) {
    const {
        thumbnail,
        price,
        title
    } = product;

    function getHighQualityThumbnail() {
        return thumbnail.replace(/\w\.jpg/gi, 'W.jpg');
    }

    return (
        <section className="product__card">
            <img 
                src={ getHighQualityThumbnail() }
                alt="product" 
                className="card__img"
            />

            <div className="card__infos">
                <h2 className="card__price">{ formatCurrency(price, 'BRL') }</h2>
                <h2 className="card__title">{ title }</h2>
            </div>

            <button type="button" className="button__add-cart">
                <BiCartAdd />
            </button>
        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    product: propTypes.shape(
        {
            thumbnail: String,
            price: String,
            title: String
        }
    )
}.isRequired;
