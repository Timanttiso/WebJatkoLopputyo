import React from 'react';
import shoppingCartimage from "../icons/shoppingCart.png"
import PropTypes from "prop-types";

const Header = () => {
    const openShoppingCart = () => {
        window.location.href = "/shoppingcart"
    }
    const goBack = () => {
        window.location.href = "/"
    }
    return (
        <header>
            <nav>
                <ul id="navigation">
                    <li id="verkkokauppa"><h1 onClick={goBack}>Verkkokauppa</h1></li>
                    <li><button onClick={openShoppingCart}><img src={shoppingCartimage} className="shoppingCart" /></button></li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    id: PropTypes.object.isRequired
}

export default Header;