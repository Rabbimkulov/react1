import './Header.css';
import React from 'react';

function Header () {
    return (
        <header>
            <div className="left">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
            <div className="right">
                <input type="search" />
                <button>Search</button>
            </div>
        </header>
    );
}

export default Header;