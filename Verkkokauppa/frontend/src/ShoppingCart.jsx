import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

export default function ShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [error, setError] = useState("");
    const [notificationMessage, setNotificationMessage] = useState(null)
    
    const fetchShoppingCart = async () => {
        try {
            const response = await axios.get("http://localhost:3000/shoppingCart");
            setShoppingCart(response.data);
        } catch (err) {
            setError("Error fetching shoppingcart: " + (err.response?.data?.error || err.message));
        }
    };
    const deleteFromShoppingCart = async (id, name) => {
        try {
            await axios.delete("http://localhost:3000/shoppingCart/" + id);
            const response = await axios.get("http://localhost:3000/shoppingCart");
            setShoppingCart(response.data);
            setNotificationMessage(
                `Tuote ${name} poistettiin ostoskorista`
            )
            setTimeout(() => {
                setNotificationMessage(null)
            }, 3000)
            
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
    return (
        <div>
            <Header id={"ostoskori"}/>
            <h1>Ostoskori</h1>
            {error && <p>{error}</p>}
                <ul>
                    {shoppingCart.map((product) => (
                        <li key={product.id} className="shoppingCartList"><img style={imageStyle} src={`/productImages/${product.imageLink.split('/').pop()}`}></img>Nimi: {product.productName} Hinta: {product.price} €  <button onClick={() =>deleteFromShoppingCart(product.id, product.productName)}>Poista korista</button></li>
                    ))} 
                </ul>
                {notificationMessage && <p style={{color:"red"}}>{notificationMessage}</p>}
            <button className="checkout" onClick={buyStuff}>Maksa tuotteet</button>
        </div>
    )
}