import './SearchBar.css';
import React from 'react';

const SearchBar = ({ searchChange }) => {
    return (
        <div className="searchbar">
            <input
                type="search"
                className="searchbar_input"
                placeholder="Search"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;