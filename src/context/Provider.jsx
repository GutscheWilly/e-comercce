import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

    const value = {
        products, 
        setProducts,
        isLoading, 
        setIsLoading,
        selectedItems,
        setSelectedItems
    };

    return (
        <AppContext.Provider value={ value }>
            { children }
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any
}.isRequired;
