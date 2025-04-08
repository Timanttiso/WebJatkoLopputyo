const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '')));

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Tietokantavirhe:', err.message);
  } else {
    console.log('Yhteys SQLite-tietokantaan onnistui.');
  }
});

const loginRouter = require('./controllers/login')(db)
const usersRouter = require('./controllers/users')(db)
const middleware = require('./utils/middleware')(db)

app.use(middleware.tokenExtractor)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

//Alustaa products tablen
db.run(`CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  productName TEXT,
  price NUMBER,
  description TEXT,
  imageLink TEXT
)`);

//Alustaa shoppingCart tablen
db.run(`CREATE TABLE IF NOT EXISTS shoppingCart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    price NUMBER,
    description TEXT,
    imageLink TEXT
)`);

//Alustaa users tablen
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
)`);

// Toiminnot käyttäjille
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Käyttäjää ei löytynyt' });
  }
  const query = 'SELECT * FROM users WHERE id = ?';
  db.get(query, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
    }
    res.json(row);
  });
});

// Toiminnot products tablelle
// Nyt vain admin voi lisätä tuotteita
app.post('/products',
  middleware.userExtractor,
  middleware.adminOnly,
  (req, res) => {
  
  const { productName, price, description, imageLink } = req.body;
  if (!productName || !price || !description || !imageLink) {
    return res.status(400).json({ error: 'Tarvitaan nimi, hinta, kuvaus ja linkki kuvaan' });
  }

  const query = `INSERT INTO products (productName, price, description, imageLink) VALUES (?, ?, ?, ?)`;
  db.run(query, [productName, price, description, imageLink], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, productName, price, description, imageLink });
  });
});

app.get('/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Kyseistä tuotetta ei ole' });
  }
  const query = 'SELECT * FROM products WHERE id = ?';
  db.get(query, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Tuotetta ei löytynyt' });
    }
    res.json(row);
  });
});

app.put('/products/:id', (req, res) => {
  const { productName, price, description, imageLink } = req.body;
  const { id } = req.params;

  if (!productName || !price || !description || !imageLink) {
    return res.status(400).json({ error: 'Tarvitaan nimi, hinta, kuvaus ja linkki kuvaan' });
  }

  const query = `UPDATE products SET productName = ?, price = ?, description = ?, imageLink = ? WHERE id = ?`;
  db.run(query, [productName, price, description, imageLink, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Tuotetta ei löytynyt' });
    }
    res.json({ message: 'Tuotteen tiedot päivitetty', id });
  });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM products WHERE id = ?`, id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Tuotetta ei löytynyt.' });
    }
    res.json({ message: 'Tuote poistettu', id });
  });
});

//Toiminnot shoppingcartille
app.post('/shoppingCart', (req, res) => {
  const { productName, price, description, imageLink } = req.body;
  if (!productName || !price || !description || !imageLink) {
    return res.status(400).json({ error: 'Tuote nimi, hinta, kuvaus ja kuvan linkki tarvitaan' });
  }

  const query = `INSERT INTO shoppingCart (productName, price, description, imageLink) VALUES (?, ?, ?, ?)`;
  db.run(query, [productName, price, description, imageLink], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, productName, price, description, imageLink });
  });
});

app.get('/shoppingCart', (req, res) => {
  db.all('SELECT * FROM shoppingCart', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.delete('/shoppingCart/:id', (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM shoppingCart WHERE id = ?`, id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Tuotetta ostoskärryssä ei löytynyt' });
    }
    res.json({ message: 'Tuote poistettu ostoskärrystä', id });
  });
});

app.delete('/shoppingCart', (req, res) => {
  db.run(`DELETE FROM shoppingCart`, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Tuotetta ostoskärryssä ei löytynyt' });
    }
    res.json({ message: 'Tuotteet poistettu ostoskärrystä' });
  });
});

app.get('/shoppingCart/Count', (req, res) => {
  db.get('SELECT COUNT(id) as count FROM shoppingCart', [], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ count: row.count });
  });
});


app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});