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
        axios.get(`http://localhost:3000/api/products/${id}`)
            .then(response => serProduct(response.data))
            .catch(err => {
                setError("Tuotetta ei löytynyt.")
                console.error(err)
            });
    }, [id])

    if(error) return <p>{error}</p>
    let imagePath = `/productImages/${product.imageLink}`
    return (
        <div className="single-product-container">
          <div className="product-image">
            <img src={imagePath} alt={product.productName} />
          </div>
          <div className="product-details">
            <h2>{product.productName}</h2>
            <h3>{product.price} €</h3>
            <p>{product.description}</p>
            <button onClick={addToShoppingCart}>Lisää Ostoskoriin</button>
            {message && <p className="success-message">{message}</p>}
          </div>
        </div>
      );

    
}
export default SingleProduct;