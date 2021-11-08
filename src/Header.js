import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

 const Header = () => {
    return (
        <div className="header__component">
            <Link className="header__element" to="/home">Home</Link>
            <Link className="header__element"  to="/service">Service</Link>
            <Link className="header__element"  to="/about">About</Link>
            <Link className="header__element"  to="/blog">Blog</Link>

            
        </div>
    )
}
export default Header;