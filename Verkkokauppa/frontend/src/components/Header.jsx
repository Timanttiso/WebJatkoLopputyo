import React from 'react';
import shoppingCartimage from "../icons/shoppingCart.png"
import PropTypes from "prop-types";
import searchIcon from "../icons/searchIcon.png"
const Filter = ({ findProduct }) => {
    return (
        <div id="search-bar">
            <input onChange={findProduct} placeholder='Etsi Tuote'/>
            <span class="icon"><img src={searchIcon} alt="🔍" /></span>
        </div>
    );
};

const Header = ({ findProduct, user, handleLogout }) => {
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
                    <li id="haku"><Filter findProduct={findProduct} /></li>
                    {user && (
                        <li>
                            <button onClick={handleLogout}>Kirjaudu ulos</button>
                        </li>
                    )}
                    <li>
                        <button onClick={openShoppingCart}>
                            <img src={shoppingCartimage} className="shoppingCart" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    findProduct: PropTypes.func.isRequired,
    user: PropTypes.object,
    handleLogout: PropTypes.func
}

export default Header