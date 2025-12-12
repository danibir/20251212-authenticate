
const login_get = (req, res) => {
    console.log('Login get call.')
    res.render('login', { title: "Log in" })
}

const login_post = (req, res) => {
    console.log('Login post call unfinished, rerouting...')
    res.redirect('/profile')
}

const profile_get = (req, res) => {
    console.log('Profile get call. (unfinished, loading placeholder)')
    const user = { username: "Johndoe", password: "Jojojojoj123" }
    res.render('profile', { title: `Profile - ${user.username}`, user })
}

const logout_post = (req, res) => {
    console.log('Login post call unfinished, rerouting...')
    res.redirect('/profile')
}

module.exports = {
    login_get,
    login_post,
    profile_get,
    logout_post
}