import React from 'react';
import "../styles/SearchBar.css"

const SearchBar = ({ searchChange }) => {
    return (
        <div id="SearchInput">
            <input
            className="search"
            placeholder="Search for champion!"
            type="search"
            onChange={searchChange}
            />
        </div>
    );
};

export default SearchBar;