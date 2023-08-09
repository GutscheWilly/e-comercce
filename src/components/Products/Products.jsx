import React, { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';

import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetchProducts('computador').then( product => 
            setProducts(product)
        );
    }, []);

    console.log(products);

    return (
        <section className="products container">
            <ProductCard />
        </section>
    );
}

export default Products;
