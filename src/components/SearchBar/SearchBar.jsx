import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import AppContext from '../../context/AppContext';

import './SearchBar.css';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    function handleSearch(event) {
        event.preventDefault();
        alert(name);
    }

    const {
        name
    } = useContext(AppContext);

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
