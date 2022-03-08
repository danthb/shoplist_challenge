import React from 'react';
import { HashRouter as Router, Link} from 'react-router-dom';
import { Fragment } from 'react';

import './Navbar.css'

const Navbar = ({click}) => {
    return (
        <Fragment>
        <nav className="navbar">
            <div className="navbar_logo">
                {/* Logo */}
                <h2>Zyrebox</h2>
            </div>
                    {/* Links */}  
                <ul className="navbar_links">
                    <li>
                        <Link to ="/" className="links">Home</Link>
                    </li>
                    <li>
                        <Link to="/products" className="links" >
                            <span><i className="fas fa-shopping-cart"></i></span>
                            Products
                        </Link>
                        
                    </li>
                </ul>
      
            <div className="navbar_menu_hamburguer" onClick={click}>
                {/* Hamburguer menu */}
                <div></div>
                <div></div>
                <div></div>
            </div>
            </nav>
            </Fragment>
    )
}   

export default Navbar;