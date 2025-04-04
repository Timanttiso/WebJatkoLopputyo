import PropTypes from 'prop-types'
import axios from 'axios';
import { useState } from 'react';
const Product = ({ product }) => {
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
    const openProduct = () => {
        window.location.href = "/product/" + product.id
    }
    const productStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const imageStyle = {
        width: 100,
        height: 100
    }
    let imagePath = `/productImages/${product.imageLink.split('/').pop()}`
    return (
        <div style={productStyle}>
            {error}
            <div className='product'>
                <h3 onClick={openProduct}>{product.productName}</h3>
                <div id='productInfo'>
                    <img style={imageStyle} src={imagePath} alt={product.productName} />
                    <br />
                    <strong>Hinta: </strong>{product.price} <a> €</a>
                    <div>{product.description}</div>
                    {/*<div><button onClick={removeProduct}>remove</button></div>*/}
                    {<div><button onClick={addToShoppingCart}>Lisää Ostoskoriin</button></div>}
                    {message && <p style={{color:"green"}}>{message}</p>}
                </div>
            </div>
        </div>
    )

}

Product.propTypes = {
    Product: PropTypes.object.isRequired,
    productToDelete: PropTypes.func.isRequired
}

export default Product