import axios from 'axios';
import { useState } from 'react';

const AdminPage = () =>{
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    const addProduct = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/products",{
                productName,
                price,
                description,
                imageLink
            });
            setMessage(`${productName} lisätty!`);
            setTimeout(() => {
                setMessage("");
            }, 3000);
            setProductName("");
            setPrice("");
            setDescription("");
            setImageLink("");
            
        } catch (err) {
            setError("Error adding item to lineup: " + (err.response?.data?.error || err.message));
        }
        
    }

    return(
        <div>
            <form onSubmit={addProduct}>
                <input type="text" placeholder='Tuotteen nimi' id="productName" onChange={(e) => setProductName(e.target.value)}></input>
                <input type="number" placeholder='Tuotteen hinta' id='price' onChange={(e) => setPrice(e.target.value)}></input>
                <textarea placeholder='Tuotteen kuvaus' id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" placeholder='Kuvan linkki' id="imageLink" onChange={(e) => setImageLink(e.target.value)}></input>
                <input type="submit" value="Lisää tuote"></input>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
}

export default AdminPage