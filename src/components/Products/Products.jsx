import React, { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';

import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetchProducts('promoção').then( response => 
            setProducts(response)
        );
    }, []);

    return (
        <section className="products container">
            {
                products.map( product => 
                    <ProductCard key={ product.id } product={ product } />
                )
            }
        </section>
    );
}

export default Products;
