import React from 'react';
import shoppingCartimage from "../icons/shoppingCart.png"
const Header = () => {
    return( 
      <div>
        <header>
              <h1>Verkkokauppa</h1> 
              <button><img src={shoppingCartimage}  class="shoppingCart"/></button>
        </header>
      </div>
    )
}
export default Header;