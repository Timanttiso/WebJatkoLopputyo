import React from 'react';
import shoppingCartimage from "../icons/shoppingCart.png"

const Header = () => {
    const openShoppingCart = () => {
        window.location.href = "/shoppingcart"
    }
    return (
        <header>
            <nav>
                <ul id="navigation">
                    <li><h1>Verkkokauppa</h1> </li>
                    <li><button onClick={openShoppingCart}><img src={shoppingCartimage} className="shoppingCart" /></button></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;