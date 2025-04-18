const jwt = require('jsonwebtoken')

const middleware = (db) => {
    const tokenExtractor = (request, response, next) => {
        const authorization = request.get('authorization')
        if (authorization && authorization.startsWith('Bearer ')) {
            request.token = authorization.replace('Bearer ', '')
        } else {
            request.token = null
        }
        next()
    }

    const userExtractor = async (request, response, next) => {
        if (!request.token) {
            return response.status(401).json({ error: 'Token puuttuu' })
        }

        try {
            const decodedToken = jwt.verify(request.token, process.env.SECRET)
            if (!decodedToken.id) {
                return response.status(401).json({ error: 'Virheellinen token' })
            }

            const query = `SELECT id, username FROM users WHERE id = ?`
            db.get(query, [decodedToken.id], (err, user) => {
                if (err) return response.status(500).json({ error: err.message })
                if (!user) return response.status(404).json({ error: 'Käyttäjää ei löytynyt' })

                user.isAdmin = user.username === 'root'

                request.user = user
                next()
            })
        } catch (error) {
            return response.status(401).json({ error: 'Virheellinen token' })
        }
    }

    const adminOnly = (request, response, next) => {
        if (!request.user || !request.user.isAdmin) {
            return response.status(403).json({ error: 'Vain järjestelmänvalvoja voi lisätä tuotteita' })
        }
        next()
    }

    return {
        tokenExtractor,
        userExtractor,
        adminOnly
    }
}

module.exports = middleware