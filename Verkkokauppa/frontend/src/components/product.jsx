import PropTypes from 'prop-types'

const Product = ({ product, /*productToDelete*/ }) => {

    {/*const removeProduct = (event) => {
        event.preventDefault()

        productToDelete({
            productName: product.productName,
            description: product.description,
            imageLink: product.imageLink,
            price: product.price,
            id: Product.id
        })
    }*/}
<<<<<<< HEAD
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const addToShoppingCart = async () => {
        try {
            const response = await axios.post("http://localhost:3000/shoppingCart",{
                productName: product.productName,
                price: product.price,
                description: product.description,
                imageLink: product.imageLink
            });
            setMessage(product.productName + " lisätty ostoskoriin!")
            const timer = setTimeout(() => {
                setMessage("");
            }, 3000);
        } catch (err) {
            setError("Error adding item to shopping cart: " + (err.response?.data?.error || err.message));
        }
    }
=======

>>>>>>> 35c698d39dd6f74acd99d2b2ffed7f9862e7ca69
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
            <div className='product'>
                {product.productName} 
                <div id='productInfo'>
                    <img style={imageStyle} src={imagePath} alt={product.productName} />
                    <br />
                    <strong>Hinta: </strong>{product.price} <a> €</a>
                    <div>{product.description}</div>
                    {/*<div><button onClick={removeProduct}>remove</button></div>*/}
<<<<<<< HEAD
                    {<div><button onClick={addToShoppingCart}>Lisää Ostoskoriin</button></div>}
                    {message && <p style={{color:"green"}}>{message}</p>}
=======
>>>>>>> 35c698d39dd6f74acd99d2b2ffed7f9862e7ca69
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