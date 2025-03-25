import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ShoppingCart from "./ShoppingCart";
import Product from "./components/product"
import productService from './services/products'
import Checkout from './checkout';
function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productService.getAll().then(response => {
            if (Array.isArray(response)) {
                setProducts(response.sort((a, b) => b.price - a.price))
            } else {
                console.error("Expected an array but got:", response)
            }
        }).catch(error => console.error("Error fetching products:", error))
    }, [])

    return (
        <>
            <Router>

                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <h2>products</h2>
                            <div id='products'>
                                {products.map(product =>
                                    <Product key={product.id} product={product} />
                                )}
                            </div>
                        </>
                    } />
                    <Route path="/shoppingcart" element={
                        <>
                            <ShoppingCart />
                        </>
                        

                    } />
                    <Route path="/checkout" element={
                        <>
                            <Checkout/>
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
