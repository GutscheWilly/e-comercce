import React, { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';

import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        fetchProducts('promoção').then( response => {
            setProducts(response);
            setIsLoading(false);
        });
    }, []);

    function getProductCards() {
        return products.map( product => 
            <ProductCard key={ product.id } product={ product } /> 
        );
    }

    return (
        (isLoading ? <Loading /> : 
            <section className="products container">
                { getProductCards() }
            </section>
        )
    );
}

export default Products;
