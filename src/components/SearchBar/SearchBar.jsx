import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import AppContext from '../../context/AppContext';
import fetchProducts from '../../api/fetchProducts';

import './SearchBar.css';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    const {
        setProducts,
        setIsLoading
    } = useContext(AppContext);

    async function handleSearch(event) {
        event.preventDefault();

        setIsLoading(true);

        fetchProducts(searchInput).then( response => {
            setProducts(response);
            setSearchInput('');
            setIsLoading(false);
        });
    }

    return (
        <form className="search__bar" onSubmit={ handleSearch }>
            <input 
                type="search"
                value={ searchInput }
                placeholder="Buscar produtos"
                className="search__input"
                required
                onChange={ ({ target }) => setSearchInput(target.value) }
            />

            <button type="submit" className="search__button">
                <FaSearch />
            </button>
        </form>
    );
}

export default SearchBar;
