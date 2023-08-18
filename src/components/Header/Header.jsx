import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';
import CartButton from '../CartButton/CartButton';
import ShopIcon from '../ShopIcon/ShopIcon';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <ShopIcon />
                <SearchBar />
                <CartButton />
            </div>
        </header>
    );
}

export default Header;
