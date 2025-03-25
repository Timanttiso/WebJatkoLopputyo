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
    const deleteFromShoppingCart = async (id) => {
        try {
            await axios.delete("http://localhost:3000/shoppingCart/" + id);
            const response = await axios.get("http://localhost:3000/shoppingCart");
            setShoppingCart(response.data);
            
        } catch (err) {
            setError("Error deleting an item from the shoppingcart: " + (err.response?.data?.error || err.message));
        }
    }
    const buyStuff =  () =>{
        axios.delete("http://localhost:3000/shoppingCart");
        window.location.href = "/checkout"

    }
    useEffect(() => {
        fetchShoppingCart();
    }, []);

    const imageStyle = {
        width: 50,
        height: 50
    }
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
                        <li key={product.id} className="shoppingCartList"><img style={imageStyle} src={`/productImages/${product.imageLink.split('/').pop()}`}></img>Nimi: {product.productName} Hinta: {product.price} €  <button onClick={() =>deleteFromShoppingCart(product.id)}>Poista korista</button></li>
                    ))} 
                </ul>
            <button className="checkout" onClick={buyStuff}>Maksa tuotteet</button>
        </div>
    )
}