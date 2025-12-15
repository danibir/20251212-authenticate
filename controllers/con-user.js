const User = require('../models/mod-user')
const jwt = require('jsonwebtoken')

const profile_get = async (req, res) => 
{
    console.info('reached profile, rendering')
    try {
        console.log(req.auth)
        const user = await User.findById(req.auth.id)
        res.render('profile', { title: `Profile - ${user.username}`, user})
        return
    } catch (error) {
        console.error('Error fetching user profile:', error)
        res.status(500).send('Internal Server Error')
        return
    }
}
const logout_post = (req, res) => 
{
    console.info('logout request, logging out')
    res.clearCookie('accessToken')
    res.redirect('/')
}

const login_get = (req, res) => 
{
    console.info('login request')
    
    // logic?
    res.render('login', { title: "Log in" })
}
const login_post = async (req, res) => 
{
    console.info('login submit')
    
    // logic?

    const {username, password} = req.body
    console.info(`Login attempt for user: ${username}`)
    try {
        const user = await User.findOne({username})
        const ok = await user.verifyPassword(password)
        if (user && ok)
        {
            const token = jwt.sign({id: user._id}, 'your_jwt_secret', {expiresIn: '15m'})
            res.cookie('accessToken', token, {httpOnly: true, sameSite: 'strict'})
            console.log('login complete')
            res.redirect('/profile')
        }
        else
        {
            console.warn('Invalid username or password')
            res.redirect('/login')
        }
    } catch (error) {
        console.error('Error during login:', error)
        res.redirect('/login')
        return
    }

}

module.exports = {
    profile_get,
    login_get,
    login_post,
    logout_post
}