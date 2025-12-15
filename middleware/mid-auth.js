const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    console.info('Authenticating user...')
    const token = req.cookies?.accessToken
    if (!token) {
        console.warn('No access token found.')
        return res.redirect('/login')
    }
    
    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
        console.error('Token verification failed:', err)
        return res.redirect('/login')
    }
    req.auth = decoded
    console.info('User authenticated successfully.')
    next()
    })
}
module.exports = {
    authenticate
}