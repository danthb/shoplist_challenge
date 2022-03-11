import './SearchBar.css';
import React from 'react';
import { accountAPI } from '../services/index'

const SearchBar = () => {
    const [product, setProduct] = React.useState([]);
    
    const getProduct = async (e) => {
        e.preventDefault();
        const name = document.getElementById('search').value;
        const product = await accountAPI.getProductByName(name);
        setProduct(product);
        console.log(product)
    }

    return (
        <div className="searchbar">
            <form onSubmit={(e) => {
                console.log('entra')
                getProduct(e);
            }}>
                <input
                    type="search"
                    id="search"
                    className="searchbar_input"
                    placeholder="Search by name"
                />

                <input
                    type="submit"
                    className="searchbar_icon"
                    value="🔍"
                    />
            </form>
        </div>
    );
}

export default SearchBar;