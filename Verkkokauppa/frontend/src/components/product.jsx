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
                    {/*<div>{product.description}</div>*/}
                    {/*<div><button onClick={removeProduct}>remove</button></div>*/}
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