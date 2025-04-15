import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [error, setError] = useState("");
    const [notificationMessage, setNotificationMessage] = useState(null)
    const [notificationMessage2, setNotificationMessage2] = useState(null)
    const [amountinCart, setamountinCart] = useState("0");
    const fetchShoppingCart = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/shoppingCart");
            setShoppingCart(response.data);
        } catch (err) {
            setError("Error fetching shoppingcart: " + (err.response?.data?.error || err.message));
        }
    };
    const getAmountinCart = async () =>{
        try {
            const response = await axios.get("http://localhost:3000/shoppingCart/Count");
            setamountinCart(response.data.count);
        } catch (err) {
            setError("Error fetching shoppingcart amount: " + (err.response?.data?.error || err.message));
        }
    }
    const deleteFromShoppingCart = async (id, name) => {
        try {
            await axios.delete("http://localhost:3000/shoppingCart/" + id);
            const response = await axios.get("http://localhost:3000/api/shoppingCart");
            setShoppingCart(response.data);
            const response2 = await axios.get("http://localhost:3000/shoppingCart/Count");
            setamountinCart(response.data.count);
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
        if(amountinCart > 0){
            axios.delete("http://localhost:3000/shoppingCart");
            window.location.href = "/checkout"
        } else{
            setNotificationMessage2("Virhe tuotteiden maksussa: yhtään tuotetta ei ole ostoskorissa!")
        }
        

    }
    useEffect(() => {
        fetchShoppingCart();
        getAmountinCart();
    }, []);

    return (
        <div className="shoppingCartContainer">
            <h1>Ostoskori</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            
            <ul>
                {shoppingCart.map((product) => (
                    <li key={product.id} className="shoppingCartList">
                        <img src={`/productImages/${product.imageLink.split('/').pop()}`} alt={product.productName} />
                        <span><strong>{product.productName}</strong> - {product.price} €</span>
                        <button onClick={() => deleteFromShoppingCart(product.id, product.productName)}>Poista</button>
                    </li>
                ))}
            </ul>
            
            {notificationMessage && <p style={{ color: "red" }}>{notificationMessage}</p>}
            
            <button className="checkout" onClick={buyStuff}>Maksa tuotteet</button>
            {notificationMessage2 && <p style={{ color: "red" }}>{notificationMessage2}</p>}
        </div>
    );
}