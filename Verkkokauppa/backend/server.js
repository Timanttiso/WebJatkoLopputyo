const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

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

//Alustaa products tablen
db.run(`CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  productName TEXT,
  price NUMBER,
  description TEXT,
  image TEXT
)`);

//Alustaa shoppingCart tablen
db.run(`CREATE TABLE IF NOT EXISTS shoppingCart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sessionID TEXT
    productname TEXT,
    price NUMBER,
    description TEXT,
    image TEXT
)`);
  
//Toiminnot products tablelle
app.post('/contactRequests', (req, res) => {
  const { name, email, phonenumber, reason } = req.body;
  if (!name || !email || !phonenumber || !reason) {
    return res.status(400).json({ error: 'Nimi, sähköposti, puhelinnumero ja syy vaaditaan' });
  }

  const query = `INSERT INTO contactRequests (name, email, phonenumber, reason) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, email, phonenumber, reason], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name, email, phonenumber, reason});
  });
});

app.get('/contactRequests', (req, res) => {
    db.all('SELECT * FROM contactRequests', [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});

app.put('/contactRequests/:id', (req, res) => {
    const { name, email, phonenumber, reason } = req.body;
    const { id } = req.params;
  
    if (!name || !email || !phonenumber || !reason) {
      return res.status(400).json({ error: 'Nimi, sähköposti, puhelinnumero ja syy vaaditaan' });
    }
  
    const query = `UPDATE contactRequests SET name = ?, email = ?, phonenumber = ?, reason = ? WHERE id = ?`;
    db.run(query, [name, email, phonenumber, reason, id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
      }
      res.json({ message: 'Käyttäjän tiedot päivitetty', id });
    });
});

app.delete('/contactRequests/:id', (req, res) => {
    const { id } = req.params;
  
    db.run(`DELETE FROM contactRequests WHERE id = ?`, id, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
      }
      res.json({ message: 'Käyttäjä poistettu', id });
    });
});

//Toiminnot shoppingcartille

app.post('/contactRequests', (req, res) => {
    const { name, email, phonenumber, reason } = req.body;
    if (!name || !email || !phonenumber || !reason) {
      return res.status(400).json({ error: 'Nimi, sähköposti, puhelinnumero ja syy vaaditaan' });
    }
  
    const query = `INSERT INTO contactRequests (name, email, phonenumber, reason) VALUES (?, ?, ?, ?)`;
    db.run(query, [name, email, phonenumber, reason], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, name, email, phonenumber, reason});
    });
  });
  
  app.get('/contactRequests', (req, res) => {
      db.all('SELECT * FROM contactRequests', [], (err, rows) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(rows);
      });
  });
  
  app.put('/contactRequests/:id', (req, res) => {
      const { name, email, phonenumber, reason } = req.body;
      const { id } = req.params;
    
      if (!name || !email || !phonenumber || !reason) {
        return res.status(400).json({ error: 'Nimi, sähköposti, puhelinnumero ja syy vaaditaan' });
      }
    
      const query = `UPDATE contactRequests SET name = ?, email = ?, phonenumber = ?, reason = ? WHERE id = ?`;
      db.run(query, [name, email, phonenumber, reason, id], function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
          return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
        }
        res.json({ message: 'Käyttäjän tiedot päivitetty', id });
      });
  });
  
  app.delete('/contactRequests/:id', (req, res) => {
      const { id } = req.params;
    
      db.run(`DELETE FROM contactRequests WHERE id = ?`, id, function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
          return res.status(404).json({ error: 'Käyttäjää ei löytynyt' });
        }
        res.json({ message: 'Käyttäjä poistettu', id });
      });
  });


app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});