const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()

module.exports = (db) => {
    usersRouter.post('/', async (request, response) => {
        const { username, password } = request.body

        if (password === undefined) {
            return response.status(400).json({ error: 'Salasana vaaditaan' })
        } else if (password.length < 3) {
            return response.status(400).json({ error: 'Salasanan täytyy olla vähintään 3 merkkiä pitkä' })
        }

        try {
            // tarkistaa onko käyttäjänimi varattu
            db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, row) => {
                if (err) return response.status(500).json({ error: err.message })
                if (row) return response.status(400).json({ error: 'Käyttäjänimi varattu' })

                const saltRounds = 10
                const passwordHash = await bcrypt.hash(password, saltRounds)

                // lisää tietokantaan
                const query = `INSERT INTO users (username, password) VALUES (?, ?)`
                db.run(query, [username, passwordHash], function (err) {
                    if (err) return response.status(500).json({ error: err.message })
                    
                    response.status(201).json({
                        id: this.lastID,
                        username,
                    })
                })
            })
        } catch (err) {
            response.status(500).json({ error: 'Käyttäjän lisäys ei onnistunut' })
        }
    })
    return usersRouter
}