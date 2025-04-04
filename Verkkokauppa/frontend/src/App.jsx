import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ShoppingCart from "./ShoppingCart";
import Product from "./components/product"
import loginService from './services/login'
import productService from './services/products'
import Checkout from './checkout';
import SingleProduct from './components/SingleProduct';
import AdminPage from './components/AdminPage';

const Products = ({ filteredProducts }) => {
    return (
        <div id='products'>
            {filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

function App() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        productService.getAll().then(response => {
            if (Array.isArray(response)) {
                setProducts(response.sort((a, b) => b.price - a.price))
                setFilteredProducts(response.sort((a, b) => b.price - a.price));
            } else {
                console.error("Expected an array but got:", response)
            }
        }).catch(error => console.error("Error fetching products:", error))

        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            productService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (username, password) => {
        try {
            const loggedInUser = await loginService.login({ username, password })

            window.localStorage.setItem('loggedUser', JSON.stringify(loggedInUser))
            productService.setToken(loggedInUser.token)
            setUser(loggedInUser)
            return true
        } catch (err) {
            console.error('Virhe kirjautumisessa:', err)
            return false
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('loggedUser')
        setMessage(`Hyvästi ${user.username} 😔`)
        setTimeout(() => {
            setMessage('')
        }, 3000)
        setUser(null)
    }

    const findProduct = (event) => {
        const updateProduct = products.filter(
            (product) =>
                product.productName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                product.description.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredProducts(updateProduct);
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header findProduct={findProduct} user={user} handleLogout={handleLogout} />
                            {message && <p style={{ color: "green" }}>{message}</p>}
                            <h2>Tuotteet</h2>
                            <Products filteredProducts={filteredProducts} />
                        </>
                    } />
                    <Route path="/shoppingcart" element={
                        <>
                            <Header findProduct={findProduct} user={user} handleLogout={handleLogout} />
                            {message && <p style={{ color: "green" }}>{message}</p>}
                            <ShoppingCart />
                        </>


                    } />
                    <Route path="/checkout" element={
                        <>
                            <Checkout />
                        </>


                    } />
                    <Route path="/products/:id" element={
                        <>
                            <Header findProduct={findProduct} user={user} handleLogout={handleLogout} />
                            {message && <p style={{ color: "green" }}>{message}</p>}
                            <SingleProduct />
                        </>

                    } />
                    <Route path="/admin" element={
                        <>
                            <Header findProduct={findProduct} user={user} handleLogout={handleLogout} />
                            {message && <p style={{ color: "green" }}>{message}</p>}
                            <AdminPage user={user} handleLogin={handleLogin} />
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
