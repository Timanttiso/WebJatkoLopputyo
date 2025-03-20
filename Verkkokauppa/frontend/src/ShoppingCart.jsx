import './App.css';
import closeShoppingCartimage from "./icons/closeShoppingCart.png"
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [error, setError] = useState("");

    
    const fetchShoppingCart = async () => {
        try {
            const response = await axios.get("http://localhost:3000/shoppingCart");
            setShoppingCart(response.data);
        } catch (err) {
            setError("Error fetching shoppingcart: " + (err.response?.data?.error || err.message));
        }
    };
    useEffect(() => {
        fetchShoppingCart();
    });


    const goBack = () => {
        window.location.href = "/"
    }
    return (
        <div>
            <button onClick ={goBack}><img src={closeShoppingCartimage} className="closeShoppingCart"/></button>
            <h1>Ostoskori</h1>
            {error && <p>{error}</p>}
                <ul>
                    {shoppingCart.map((product) => (
                        <li key={product.id} class="shoppingCartList"><img src={product.imageLink}></img>{product.productName} {product.price}</li>
                    ))} 
                </ul>
        </div>
    )
}