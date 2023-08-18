import React, { useContext, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';

import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {
    const {
        products, 
        setProducts,
        isLoading, 
        setIsLoading
    } = useContext(AppContext);

    function getProductCards() {
        return products.map( product => 
            <ProductCard key={ product.id } product={ product } /> 
        );
    }

    useEffect( () => {
        const defaultQuery = 'celular';

        fetchProducts(defaultQuery).then( response => {
            setProducts(response);
            setIsLoading(false);
        });
    }, []);

    return (
        isLoading ? <Loading /> : 
            <section className="products container">
                { getProductCards() }
            </section>
    );
}

export default Products;
