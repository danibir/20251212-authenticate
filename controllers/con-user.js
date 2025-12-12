const User = require('../models/mod-user')

const profile_get = (req, res) => 
{
    console.info('reached profile, rendering')
    const user = req.session.user
    if (!user)
        res.redirect('login')
    res.render('profile', { title: `Profile - ${user.username}`, user })
}
const logout_post = (req, res) => 
{
    console.info('logout request, logging out')
    req.session.destroy()
    // Implement logout logic here
    res.redirect('/')
}

const login_get = (req, res) => 
{
    console.info('login request')
    
    // logic?
    if (req.session.user)
    {
        res.redirect('/profile')
    }
    else
    {
        res.render('login', { title: "Log in" })
    }
}
const login_post = async (req, res) => 
{
    console.info('login submit')
    
    // logic?

    const {username, password} = req.body

    try 
    {
        const user = await User.findOne({username})
        if (user && user.password === password) 
        {
            req.session.user = {username: user.username}
            res.redirect('/profile')
            return
        }
    } catch (error) 
    {
        console.error('error at login:', error)
        res.redirect('/login')
        return
    }

    if (!username || !password) //with forms required variable, this error *should* be unreachable
    { 
        console.warn('login fail: missing username or password')
        res.redirect('/login')
        return
    }

    console.warn('login fail: denied')
    res.redirect('/login')
}

module.exports = {
    profile_get,
    login_get,
    login_post,
    logout_post
}