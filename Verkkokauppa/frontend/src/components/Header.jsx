import React from 'react';
import shoppingCartimage from "../icons/shoppingCart.png"

const Header = () => {
    const openShoppingCart = () => {
      window.location.href = "/shoppingcart"
    }
    return( 
      
      <div>
        <header>
              <h1>Verkkokauppa</h1> 
              <button onClick ={openShoppingCart}><img src={shoppingCartimage} className="shoppingCart"/></button>
        </header>
      </div>
    )
}
export default Header;