import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <form className="search__bar">
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
