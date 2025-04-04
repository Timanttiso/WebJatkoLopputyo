import PropTypes from 'prop-types'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {id} = useParams();
    const [product, serProduct] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const addToShoppingCart = async () => {
        try {
            await axios.post("http://localhost:3000/shoppingCart",{
                productName: product.productName,
                price: product.price,
                description: product.description,
                imageLink: product.imageLink
            });
            setMessage(product.productName + " lisätty ostoskoriin!")
            setTimeout(() => {
                setMessage("");
            }, 3000);
        } catch (err) {
            setError("Error adding item to shopping cart: " + (err.response?.data?.error || err.message));
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => serProduct(response.data))
            .catch(err => {
                setError("Tuotetta ei löytynyt.")
                console.error(err)
            });
    }, [id])

    if(error) return <p>{error}</p>
    const imageStyle = {
        width: 350,
        height: 350
    }
    let imagePath = `/productImages/${product.imageLink}`
    return(
        <div>
            <h2>{product.productName}</h2>
            <img style={imageStyle} src={imagePath} alt={product.productName} /><h3>{product.price} €</h3>
            <p>{product.description}</p>
            {<div><button onClick={addToShoppingCart}>Lisää Ostoskoriin</button></div>}
            {message && <p style={{color:"green"}}>{message}</p>}
        </div>

    );

    
}
export default SingleProduct;