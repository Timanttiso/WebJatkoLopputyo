import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ShoppingCart from "./ShoppingCart";
import Product from "./components/Product"
import productService from './services/products'

function App() {
    const [products, setProducts] = useState([])
    const [notificationMessage, setNotificationMessage] = useState(null)

    useEffect(() => {
        productService.getAll().then(response => {
            if (Array.isArray(response)) {
                setProducts(response.sort((a, b) => b.price - a.price))
            } else {
                console.error("Expected an array but got:", response)
            }
        }).catch(error => console.error("Error fetching products:", error))
    }, [])

    const deleteProduct = async (productToDelete) => {
        if (window.confirm(`Remove product ${productToDelete.productName}`)) {
            try {
                await productService.remove(productToDelete.id)
                await productService.getAll().then(products => setProducts(products))

                setNotificationMessage(
                    `product ${productToDelete.productName} removed`
                )
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 3000)
            } catch (exception) {
                setNotificationMessage(exception.message)
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 3000)
            }
        }
    }


    return (
        <>
            <Router>

                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <h2>products</h2>
                            <div>{notificationMessage}</div>
                            <div id='products'>
                                {products.map(product =>
                                    <Product key={product.id} product={product} productToDelete={deleteProduct} />
                                )}
                            </div>
                        </>
                    } />
                    <Route path="/shoppingcart" element={
                        <>
                            <ShoppingCart />
                        </>
                        

                    } />
                </Routes>
            </Router>
            <footer>
                <h2>Tietoa Meistä</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur nisi id lorem elementum, consequat ornare lorem ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Praesent vel pellentesque sem. Donec bibendum convallis leo. Sed eget mi pellentesque, maximus ipsum sit amet, placerat velit. Sed ut ipsum suscipit,
                     ultricies enim bibendum, vehicula nisi. Vivamus erat quam, vestibulum ac massa vitae, eleifend bibendum nisi. Pellentesque malesuada erat commodo vehicula commodo.</p>
                <p>©1999 - 2025 Verkkokauppa</p>
            </footer>
        </>
    )
}

export default App
