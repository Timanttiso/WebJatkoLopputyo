const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginRouter = require('express').Router()

module.exports = (db) => {
    loginRouter.post('/', async (request, response) => {
        const { username, password } = request.body

        if (!username || !password) {
            return response.status(400).json({ error: 'Käyttäjänimi ja salasana vaaditaan' })
        }

        try {
            const user = await new Promise((resolve, reject) => {
                db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, row) => {
                    if (err) return reject(err)
                    resolve(row)
                })
            })

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return response.status(401).json({ error: 'Väärä käyttäjänimi tai salasana' })
            }

            const userForToken = {
                username: user.username,
                id: user.id,
            }

            const token = jwt.sign(userForToken, process.env.SECRET)

            response
            .status(200)
            .send({ token, username: user.username })
        } catch (error) {
            console.error('Kirjautumis virhe:', error)
            response.status(500).json({ error: 'Kirjautumisessa tapahtui virhe' })
        }
    })

    return loginRouter
}