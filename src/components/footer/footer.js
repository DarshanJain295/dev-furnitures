import React from 'react';
import './footer.styles.css'

function Footer() {
    return (
        <footer>
            <div className=''><h4>About</h4>
                <br/>We sell furniture all around
                <br/>Rajasthan, Since 2005.
                <br/>
                <br/><i class="fa-solid fa-location-dot"/> Bhilwara, Rajasthan
                <br/><i class="fa-solid fa-phone"></i>  +91-1-12-14-2-12-14
            </div>
            <div className='menu'><h4>Menu</h4>
                <ul>
                    <li>Our Products</li>
                    <li>Visit us</li>
                    <li>Terms and dash</li>
                </ul>
            </div>
            <div className='menu'><h4>Account</h4>
            <ul>
                    <li>My Account</li>
                    <li>Checkout</li>
                    <li>My Cart</li>
                    <li>Logout</li>
                </ul>
            </div>
            <div className=''><h4>Stay Connected</h4><br/>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-solid fa-envelope"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </footer>
    );
}

export default Footer;