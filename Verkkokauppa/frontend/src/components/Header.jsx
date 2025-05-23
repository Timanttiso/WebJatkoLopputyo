import React from 'react';
import shoppingCartimage from "../icons/shoppingCart.png"
import PropTypes from "prop-types";
import searchIcon from "../icons/searchIcon.png"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Filter = ({ findProduct }) => {
    const navigate = useNavigate();
    const handleSearch = (e) =>{
        e.preventDefault();
        
        if(location.pathname != "/"){
            navigate("/");
        }
        
    };
    const handleKeyPress =(e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    return (
        <div id="search-bar">
            <input onChange={findProduct} onKeyDown={handleKeyPress} placeholder='Etsi Tuote'/>
            <span className="icon" onClick={handleSearch} ><img src={searchIcon} alt="🔍" /></span>
        </div>
    );
};

Filter.propTypes = {
    findProduct: PropTypes.func.isRequired,
};

const Header = ({ findProduct, user, handleLogout }) => {

    const [amountinCart, setamountinCart] = useState("0");
    const [error, setError] = useState("");

    const getAmountinCart = async () =>{
        try {
            const response = await axios.get("http://localhost:3000/shoppingCart/Count");
            setamountinCart(response.data.count);
        } catch (err) {
            setError("Error fetching shoppingcart amount: " + (err.response?.data?.error || err.message));
        }
    }
    const openShoppingCart = () => {
        window.location.href = "/shoppingcart"
    }
    const goBack = () => {
        window.location.href = "/"
    }
    useEffect(() => {
        getAmountinCart();
    }, []);
    if(amountinCart == "0"){
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
    }else{
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
                            
                            <p id="shoppingCartAmount">{amountinCart}</p>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    ) 
    }
   
}

Header.propTypes = {
    findProduct: PropTypes.func.isRequired,
    user: PropTypes.object,
    handleLogout: PropTypes.func
}

export default Header