import React from "react";
import "./navbar.styles.css"
import ShopPage from "../../pages/shop-page/shop-page";


export const Navbar = () => (
    <div className="container">
        <ul>
            <li><a href="mat-touch-karo">Home</a></li>
            <li><a href={< ShopPage/>}>Our Products</a></li>
            <li><a href="mat-touch-karo">Visit us</a></li>                    
        </ul>
    </div>
)