import axios from 'axios';
import { useState } from 'react';

const AdminPage = ({ user, handleLogin }) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');

    const addProduct = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/products',{
                productName,
                price,
                description,
                imageLink
            });
            setMessage(`${productName} lisätty!`);
            setTimeout(() => {
                setMessage('');
            }, 3000);
            setProductName('');
            setPrice('');
            setDescription('');
            setImageLink('');
            
        } catch (err) {
            setError('Error adding item to lineup: ' + (err.response?.data?.error || err.message));
        }
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        const success = await handleLogin(username, password)
        
        if (success) {
            setUsername('')
            setPassword('')
            setMessage(`Tervetuloa ${user.username} 🤗`)
            setTimeout(() => setMessage(''), 3000)
        } else {
            setError('Väärä käyttäjätunnus tai salasana')
            setTimeout(() => setError(''), 3000)
        }
    }

    if (user === null) {
        return (
            <div className='admin-container'>
                <h1>Kirjaudu sisään</h1>
                {message && <p className='admin-message success'>{message}</p>}
                {error && <p className='admin-message error'>{error}</p>}
                <form className='admin-form' onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            value={username} name='Username'
                            placeholder='Käyttäjätunnus'
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            value={password}
                            placeholder='Salasana'
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>
                    <button type='submit'>Kirjaudu sisään</button>
                </form>
            </div>
        )
    }

    return(
        <div className='admin-container'>
            <h1>Lisää uusi tuote myyntiin</h1>
            <form className='admin-form' onSubmit={addProduct}>
                <input type="text" placeholder='Tuotteen nimi' id="productName" onChange={(e) => setProductName(e.target.value)}></input>
                <input type="number" placeholder='Tuotteen hinta' id='price' onChange={(e) => setPrice(e.target.value)}></input>
                <textarea placeholder='Tuotteen kuvaus' id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" placeholder='Kuvan linkki' id="imageLink" onChange={(e) => setImageLink(e.target.value)}></input>
                <input type="submit" value="Lisää tuote"></input>
            </form>
            {message && <p className='admin-message success'>{message}</p>}
            {error && <p className='admin-message error'>{error}</p>}
        </div>
    )
}

export default AdminPage