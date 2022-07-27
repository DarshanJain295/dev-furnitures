import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css"

const Navbar = () => (
    <div className="container">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Our Products</Link></li>
            <li><Link to="">Visit us</Link></li>                    
        </ul>
    </div>
)

export default Navbar;