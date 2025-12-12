
const index = (req, res) => {
    res.render('index', { title: "Homepage", user: req.session.user })
}

module.exports = {
    index
}