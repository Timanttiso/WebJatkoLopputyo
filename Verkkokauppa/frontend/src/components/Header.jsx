import React from 'react';
import shoppingCartimage from "../icons/shoppingCart.png"
import closeShoppingCartimage from "../icons/closeShoppingCart.png"
import PropTypes from "prop-types";

const Header = ({ id }) => {
    const openShoppingCart = () => {
        window.location.href = "/shoppingcart"
    }
    const goBack = () => {
        window.location.href = "/"
    }
    if (id === "etusivu") {
        return (
            <header>
                <nav>
                    <ul id="navigation">
                        <li id="verkkokauppa"><h1>Verkkokauppa</h1></li>
                        <li><button onClick={openShoppingCart}><img src={shoppingCartimage} className="shoppingCart" /></button></li>
                    </ul>
                </nav>
            </header>
        )
    }
    if (id === "ostoskori") {
        return (
            <header>
                <nav>
                    <ul id="navigation">
                        <li id="verkkokauppa"><h1>Verkkokauppa</h1></li>
                        <button onClick ={goBack}><img src={closeShoppingCartimage} className="closeShoppingCart"/></button>
                    </ul>
                </nav>
            </header>
        )
    }

}

Header.propTypes = {
    id: PropTypes.object.isRequired
}

export default Header;