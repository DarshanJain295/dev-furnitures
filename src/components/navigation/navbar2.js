import React from "react";
import { Link } from "react-router-dom";
import "./navbar2.css"

const Navbar2 = () => (
    <div className="whole">
        <div className="sober">
            <div className="headin"><h2>The Dev Furnitures</h2></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Our Products</Link></li>
                <li><Link to="">Visit us</Link></li>                    
            </ul>
        </div>
    
    </div>
    
)

export default Navbar2;